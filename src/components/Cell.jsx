import React from 'react';
import styles from '../styles/CrosswordBoard.module.css';

const Cell = ({ row, col, cellData, onChange }) => {
  const { isBlock, acrossStart, downStart, letter } = cellData;
  if (isBlock) {
    return <div className={styles.blockCell} />;
  }
  const clueNumber = acrossStart || downStart;
  return (
    <div className={styles.cellWrapper}>
      {clueNumber && (
        <div className={styles.clueNumber}>
          {acrossStart && downStart ? `${acrossStart},${downStart}` : acrossStart || downStart}
        </div>
      )}
      <input
        type="text"
        maxLength={1}
        value={letter}
        onChange={(e) => onChange(row, col, e.target.value)}
        className={`${styles.cellInput} ${letter === '' ? styles.emptyInput : ''}`}
      />
    </div>
  );
};

export default Cell;
