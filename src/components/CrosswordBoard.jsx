import React from 'react';
import { useCrossword } from '../hooks/useCrossword';
import Cell from './Cell';
import Clues from './Clues';
import styles from '../styles/CrosswordBoard.module.css';

const CrosswordBoard = ({ puzzleData }) => {
  const {
    grid,
    handleChange,
    handleSubmit,
    handleReset,
    resultMessage,
    activeClue,
    setActiveClue,
  } = useCrossword(puzzleData);
  const { acrossClues, downClues } = puzzleData;
  const gridSize = grid[0].length;

  return (
    <div className={styles.crosswordContainer}>
      <div
        className={styles.board}
        style={{ gridTemplateColumns: `repeat(${gridSize}, 40px)` }}
      >
        {grid.map((rowData, rowIndex) =>
          rowData.map((cellData, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              cellData={cellData}
              onChange={handleChange}
            />
          ))
        )}
      </div>

      {/* 단서 목록 - 클릭하면 해당 단서를 활성화 */}
      <Clues
        acrossClues={acrossClues}
        downClues={downClues}
        setActiveClue={setActiveClue}
      />

      <div className={styles.buttons}>
        <button onClick={handleSubmit}>제출</button>
        <button onClick={handleReset}>리셋</button>
      </div>

      {resultMessage && <div className={styles.result}>{resultMessage}</div>}
    </div>
  );
};

export default CrosswordBoard;
