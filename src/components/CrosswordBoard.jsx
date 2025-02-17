import React from 'react';
import styles from '../styles/CrosswordBoard.module.css';
import { useCrossword } from '../hooks/useCrossword';

const CrosswordBoard = ({ puzzleData }) => {
  const { grid, handleChange, handleSubmit, handleReset, resultMessage } = useCrossword(puzzleData);

  return (
    <div className={styles.crosswordContainer}>
      {/* 퍼즐 보드 */}
      <div className={styles.board}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, colIndex) => {
              if (cell.isBlock) {
                return <div key={colIndex} className={styles.blockCell} />;
              }
              // 해당 칸이 단서 시작 번호를 가지고 있다면 표시
              const clueNumber = cell.acrossStart || cell.downStart;
              return (
                <div key={colIndex} className={styles.cellWrapper}>
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
                    className={styles.cellInput}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

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
