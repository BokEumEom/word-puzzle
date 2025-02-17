// useCrossword.js
import { useState, useEffect } from 'react';

/**
 * useCrossword 훅
 * @param {Object} puzzleData - 퍼즐 데이터 { puzzleSize, puzzleGrid, acrossClues, downClues }
 */
export const useCrossword = (puzzleData) => {
  const { puzzleGrid, acrossClues, downClues } = puzzleData;
  
  // 초기 그리드를 깊은 복사하여 상태로 관리
  const [grid, setGrid] = useState(
    puzzleGrid.map((row) => row.map((cell) => ({ ...cell })))
  );
  const [resultMessage, setResultMessage] = useState('');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  // 활성 단서를 저장 (예: { number, direction, startRow, startCol, length, answer })
  const [activeClue, setActiveClue] = useState(null);

  // 문자열 정규화: 대소문자 구분 없이 비교 (모두 대문자로)
  const normalizeString = (str) => str.trim().replace(/\s+/g, '').toUpperCase();

  // 각 셀 입력 업데이트
  const handleChange = (row, col, value) => {
    if (value.length > 1) return; // 한 글자만 허용
    const upperValue = value.toUpperCase();
    setGrid((prev) => {
      const newGrid = prev.map((r) => r.map((cell) => ({ ...cell })));
      newGrid[row][col].letter = upperValue;
      return newGrid;
    });
    setAutoSubmitted(false);
  };

  // 단서 검증 (활성 단서 기준)
  const checkClue = (clue, direction, currentGrid) => {
    const { startRow, startCol, length, answer } = clue;
    let userAnswer = '';

    for (let i = 0; i < length; i++) {
      const r = direction === 'across' ? startRow : startRow + i;
      const c = direction === 'across' ? startCol + i : startCol;
      if (!currentGrid[r] || !currentGrid[r][c]) {
        console.warn(`⚠️ [검증 실패] ${direction} ${clue.number}번: (${r},${c}) 위치 없음`);
        return false;
      }
      userAnswer += currentGrid[r][c].letter || '';
    }

    console.log(
      `[검증] ${direction} ${clue.number}번 - 입력: ${normalizeString(userAnswer)}, 정답: ${normalizeString(answer)}`
    );
    return normalizeString(userAnswer) === normalizeString(answer);
  };

  // 수동 제출: 활성 단서만 검증
  const handleSubmit = () => {
    if (!activeClue) {
      console.warn('활성 단서가 설정되지 않았습니다.');
      setResultMessage("단서를 먼저 선택하세요.");
      return;
    }
    const direction = activeClue.direction;
    const correct = checkClue(activeClue, direction, grid);
    setResultMessage(
      correct
        ? `단서 ${activeClue.number}: 정답입니다!`
        : `단서 ${activeClue.number}: 오답입니다.`
    );
    setAutoSubmitted(true);
  };

  // 활성 단서에 대해 자동 검증 (해당 단서의 모든 셀이 채워지면)
  useEffect(() => {
    if (!activeClue) return;
    const { direction, startRow, startCol, length } = activeClue;
    let isComplete = true;
    for (let i = 0; i < length; i++) {
      const r = direction === 'across' ? startRow : startRow + i;
      const c = direction === 'across' ? startCol + i : startCol;
      if (!grid[r][c].letter.trim()) {
        isComplete = false;
        break;
      }
    }
    if (isComplete && !autoSubmitted) {
      const correct = checkClue(activeClue, direction, grid);
      setResultMessage(
        correct
          ? `단서 ${activeClue.number}: 정답입니다!`
          : `단서 ${activeClue.number}: 오답입니다.`
      );
      setAutoSubmitted(true);
    }
  }, [grid, activeClue, autoSubmitted]);

  // 리셋: 비블록 셀의 입력값 초기화
  const handleReset = () => {
    setGrid(
      puzzleGrid.map((row) =>
        row.map((cell) => (cell.isBlock ? cell : { ...cell, letter: '' }))
      )
    );
    setResultMessage('');
    setAutoSubmitted(false);
  };

  // 전체 퍼즐(모든 오픈 셀)이 채워졌을 때 자동 제출 (활성 단서가 설정되어 있을 경우)
  useEffect(() => {
    const isComplete = grid.every((row) =>
      row.every((cell) => cell.isBlock || cell.letter.trim() !== '')
    );
    if (isComplete && !autoSubmitted && activeClue) {
      setTimeout(() => {
        handleSubmit();
      }, 100);
    }
  }, [grid, autoSubmitted, activeClue]);

  return {
    grid,
    handleChange,
    handleSubmit,
    handleReset,
    resultMessage,
    activeClue,
    setActiveClue, // 외부에서 활성 단서를 설정할 수 있도록
  };
};

export default useCrossword;
