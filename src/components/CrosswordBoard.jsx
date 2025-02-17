
import styles from '../styles/CrosswordBoard.module.css';
import { useCrossword } from '../hooks/useCrossword';
import Clues from './Clues'; // 단서 컴포넌트 임포트

const CrosswordBoard = ({ puzzleData }) => {
  const { grid, handleChange, handleSubmit, handleReset, resultMessage } = useCrossword(puzzleData);
  const { acrossClues, downClues } = puzzleData; // 가로, 세로 단서 데이터

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
