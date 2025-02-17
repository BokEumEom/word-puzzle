import { useState, useEffect } from 'react';

/**
 * useCrossword 훅
 * @param {Object} initialPuzzleData - 퍼즐 데이터 { puzzleSize, puzzleGrid, acrossClues, downClues }
 */
export const useCrossword = (initialPuzzleData) => {
  const { puzzleGrid: initialGrid, acrossClues, downClues } = initialPuzzleData;
  
  // 초기 그리드를 깊은 복사해서 상태로 관리
  const [grid, setGrid] = useState(
    initialGrid.map((row) => row.map((cell) => ({ ...cell })))
  );
  const [resultMessage, setResultMessage] = useState('');
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  // 문자열 정규화 (한글 입력 문제 방지)
  const normalizeString = (str) => str.trim().replace(/\s+/g, '').toUpperCase();

  // 각 칸의 입력값 업데이트
  const handleChange = (row, col, value) => {
    if (value.length > 1) return; // 한 글자만 허용
    const upperCaseValue = value.toUpperCase(); // 자동으로 대문자로 변환
    setGrid((prev) => {
      const newGrid = prev.map((r) => r.map((cell) => ({ ...cell })));
      newGrid[row][col].letter = upperCaseValue;
      return newGrid;
    });
    setAutoSubmitted(false);
  };

  // 가로/세로 단서 검증 함수 (공유 셀 고려)
  const checkClue = (clue, direction, latestGrid) => {
    const { startRow, startCol, length, answer } = clue;
    let userAnswer = '';

    for (let i = 0; i < length; i++) {
      const r = direction === 'across' ? startRow : startRow + i;
      const c = direction === 'across' ? startCol + i : startCol;
      userAnswer += latestGrid[r][c]?.letter || ''; // 빈 값 방지
    }

    console.log(`[검증] ${direction} ${clue.number}번 - 입력: ${normalizeString(userAnswer)}, 정답: ${normalizeString(answer)}`);
    
    return normalizeString(userAnswer) === normalizeString(answer);
  };

  // 모든 단서 검증
  const handleSubmit = () => {
    let allCorrect = true;
    const latestGrid = grid.map(row => row.map(cell => ({ ...cell }))); // 최신 grid 복사

    for (const clue of acrossClues) {
      if (!checkClue(clue, 'across', latestGrid)) {
        allCorrect = false;
        break;
      }
    }

    if (allCorrect) {
      for (const clue of downClues) {
        if (!checkClue(clue, 'down', latestGrid)) {
          allCorrect = false;
          break;
        }
      }
    }

    setResultMessage(allCorrect ? '🎉 정답입니다!' : '❌ 오답입니다. 다시 확인하세요.');
    setAutoSubmitted(true);
  };

  // 리셋: 비블록 셀의 입력값만 초기화
  const handleReset = () => {
    setGrid(
      initialGrid.map((row) =>
        row.map((cell) => (cell.isBlock ? cell : { ...cell, letter: '' }))
      )
    );
    setResultMessage('');
    setAutoSubmitted(false);
  };

  // 자동 제출 기능 (입력 완료 시 실행)
  useEffect(() => {
    const isComplete = grid.every((row) =>
      row.every((cell) => cell.isBlock || cell.letter.trim() !== '')
    );

    if (isComplete && !autoSubmitted) {
      setTimeout(() => {
        handleSubmit();
      }, 100);
    }
  }, [grid, autoSubmitted]);

  return { grid, handleChange, handleSubmit, handleReset, resultMessage };
};
