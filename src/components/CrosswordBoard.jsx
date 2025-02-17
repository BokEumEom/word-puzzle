import React from 'react';
import styles from '../styles/CrosswordBoard.module.css';
import { useCrossword } from '../hooks/useCrossword';
import Clues from './Clues';

const CrosswordBoard = ({ puzzleData }) => {
  const { grid, handleChange, handleSubmit, handleReset, resultMessage } = useCrossword(puzzleData);
  const { acrossClues, downClues } = puzzleData;
  const gridSize = grid[0].length; // 퍼즐의 열 개수 (5, 7, 8, 9 등)

  return (
    <div className={styles.crosswordContainer}>
      {/* 퍼즐 보드 */}
      <div
        className={styles.board}
        style={{ gridTemplateColumns: `repeat(${gridSize}, 40px)` }} // 동적으로 열 개수 지정
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (cell.isBlock) {
              return (
                <div key={`${rowIndex}-${colIndex}`} className={styles.blockCell}>
                  {/* blockCell::after 에서 ✖ 표시 */}
                </div>
              );
            }
            const clueNumber = cell.acrossStart || cell.downStart;
            return (
              <div key={`${rowIndex}-${colIndex}`} className={styles.cellWrapper}>
                {clueNumber && (
                  <div className={styles.clueNumber}>
                    {cell.acrossStart && cell.downStart
                      ? `${cell.acrossStart},${cell.downStart}`
                      : cell.acrossStart || cell.downStart}
                  </div>
                )}
                <input
                  type="text"
                  maxLength={1}
                  value={cell.letter}
                  onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                  className={`${styles.cellInput} ${cell.letter === '' ? styles.emptyInput : ''}`}
                />
              </div>
            );
          })
        )}
      </div>

      {/* 가로 및 세로 단서 컴포넌트 */}
      <Clues acrossClues={acrossClues} downClues={downClues} />

      {/* 제출 및 리셋 버튼 */}
      <div className={styles.buttons}>
        <button onClick={handleSubmit}>제출</button>
        <button onClick={handleReset}>리셋</button>
      </div>
      {resultMessage && <div className={styles.result}>{resultMessage}</div>}
    </div>
  );
};

export default CrosswordBoard;
