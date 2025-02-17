import { useState } from 'react';

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

  // 각 칸의 입력값 업데이트
  const handleChange = (row, col, value) => {
    if (value.length > 1) return; // 한 글자만 허용
    setGrid((prev) => {
      const newGrid = prev.map((r) => r.map((cell) => ({ ...cell })));
      newGrid[row][col].letter = value;
      return newGrid;
    });
  };

  // 단서(가로/세로) 검증 함수
  const checkClue = (clue, direction) => {
    const { startRow, startCol, length, answer } = clue;
    let userAnswer = '';
    for (let i = 0; i < length; i++) {
      const r = direction === 'across' ? startRow : startRow + i;
      const c = direction === 'across' ? startCol + i : startCol;
      userAnswer += grid[r][c].letter;
    }
    return userAnswer === answer;
  };

  // 제출 시 전체 단서 검증
  const handleSubmit = () => {
    let allCorrect = true;
    for (const clue of acrossClues) {
      if (!checkClue(clue, 'across')) {
        allCorrect = false;
        break;
      }
    }
    if (allCorrect) {
      for (const clue of downClues) {
        if (!checkClue(clue, 'down')) {
          allCorrect = false;
          break;
        }
      }
    }
    setResultMessage(allCorrect ? '정답입니다!' : '오답입니다. 다시 확인하세요.');
  };

  // 리셋
  const handleReset = () => {
    setGrid(
      initialGrid.map((row) =>
        row.map((cell) => (cell.isBlock ? cell : { ...cell, letter: '' }))
      )
    );
    setResultMessage('');
  };

  return { grid, handleChange, handleSubmit, handleReset, resultMessage };
};
