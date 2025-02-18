import React from 'react';
import styles from '../styles/CrosswordBoard.module.css';

const Cell = ({ row, col, cellData, onChange }) => {
  if (cellData.isBlock) {
    return <div className={styles.blockCell} />;
  }

  const clueNumber = cellData.acrossStart || cellData.downStart;
  
  return (
    <div className={styles.cellWrapper}>
      {clueNumber && <div className={styles.clueNumber}>{clueNumber}</div>}
      <input
        type="text"
        maxLength="1"
        value={cellData.letter}
        onChange={(e) => onChange(row, col, e.target.value.toUpperCase())}
        className={styles.cellInput}
      />
    </div>
  );
};

export default Cell;
