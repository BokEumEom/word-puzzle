// src/pages/Game.jsx

import { useLocation, useNavigate } from 'react-router-dom';
import CrosswordBoard from '../components/CrosswordBoard';
import Header from '../components/Header';
import Button from '../components/Button';
import styles from '../styles/Game.module.css';

// 퍼즐 데이터 모듈 임포트
import { puzzleSize5, puzzleGrid5, acrossClues5, downClues5 } from '../data/puzzleData5';
import { puzzleSize7, puzzleGrid7, acrossClues7, downClues7 } from '../data/puzzleData7';
import { puzzleSize8, puzzleGrid8, acrossClues8, downClues8 } from '../data/puzzleData8';
import { puzzleSize9, puzzleGrid9, acrossClues9, downClues9 } from '../data/puzzleData9';

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { puzzleSize } = location.state || {};

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
  } else if (puzzleSize === 8) {
    puzzleData = {
      puzzleSize: puzzleSize8,
      puzzleGrid: puzzleGrid8,
      acrossClues: acrossClues8,
      downClues: downClues8,
    };
  } else if (puzzleSize === 9) {
    puzzleData = {
      puzzleSize: puzzleSize9,
      puzzleGrid: puzzleGrid9,
      acrossClues: acrossClues9,
      downClues: downClues9,
    };
  } else {
    // 퍼즐 크기 정보가 없거나 잘못된 경우 홈으로 이동 안내
    return (
      <div className={styles.gameContainer}>
        <p>잘못된 접근입니다. 홈으로 이동해주세요.</p>
        <Button onClick={() => navigate('/')}>홈으로</Button>
      </div>
    );
  }

  return (
    <div className={styles.gameContainer}>
      {/* Header 컴포넌트 적용 */}
      <Header />

      <main className={styles.main}>
        <CrosswordBoard puzzleData={puzzleData} />
      </main>

      <footer className={styles.footer}>
        <Button onClick={() => navigate('/')}>홈으로</Button>
      </footer>
    </div>
  );
};

export default Game;
