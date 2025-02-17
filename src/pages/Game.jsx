import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CrosswordBoard from '../components/CrosswordBoard';
import styles from '../styles/Game.module.css';

// 퍼즐 데이터 예시들 (각 데이터 파일로 분리하여 관리)
import { puzzleSize5, puzzleGrid5, acrossClues5, downClues5 } from '../data/puzzleData5';
import { puzzleSize7, puzzleGrid7, acrossClues7, downClues7 } from '../data/puzzleData7';
import { puzzleSize9, puzzleGrid9, acrossClues9, downClues9 } from '../data/puzzleData9';

const Game = () => {
  const location = useLocation();
  const { puzzleSize } = location.state || {}; // Home에서 전달한 퍼즐 크기

  let puzzleData = null;
  if (puzzleSize === 5) {
    puzzleData = {
      puzzleSize: puzzleSize5,
      puzzleGrid: puzzleGrid5,
      acrossClues: acrossClues5,
      downClues: downClues5,
    };
  } else if (puzzleSize === 7) {
    puzzleData = {
      puzzleSize: puzzleSize7,
      puzzleGrid: puzzleGrid7,
      acrossClues: acrossClues7,
      downClues: downClues7,
    };
  } else if (puzzleSize === 9) {
    puzzleData = {
      puzzleSize: puzzleSize9,
      puzzleGrid: puzzleGrid9,
      acrossClues: acrossClues9,
      downClues: downClues9,
    };
  } else {
    // 퍼즐 크기가 전달되지 않은 경우
    return (
      <div className={styles.gameContainer}>
        <h2>잘못된 접근입니다. 다시 홈으로 이동해주세요.</h2>
        <Link to="/">홈으로</Link>
      </div>
    );
  }

  return (
    <div className={styles.gameContainer}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {puzzleSize}×{puzzleSize} 낱말퀴즈
        </h2>
      </header>
      <main className={styles.main}>
        <CrosswordBoard puzzleData={puzzleData} />
      </main>
      <nav className={styles.nav}>
        <Link to="/">홈으로</Link>
      </nav>
    </div>
  );
};

export default Game;
