
import styles from '../styles/Clues.module.css';

const Clues = ({ acrossClues, downClues }) => {
  return (
    <div className={styles.cluesContainer}>
      <div className={styles.cluesSection}>
        <h3 className={styles.title}>가로 열쇠</h3>
        <ul className={styles.list}>
          {acrossClues.map((clue) => (
            <li key={clue.number} className={styles.listItem}>
              <strong>{clue.number}.</strong> {clue.clue}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cluesSection}>
        <h3 className={styles.title}>세로 열쇠</h3>
        <ul className={styles.list}>
          {downClues.map((clue) => (
            <li key={clue.number} className={styles.listItem}>
              <strong>{clue.number}.</strong> {clue.clue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Clues;
