// src/pages/Game.jsx

import { useLocation, useNavigate } from 'react-router-dom';
import CrosswordBoard from '../components/CrosswordBoard';
import Header from '../components/Header';
import Button from '../components/Button';
import styles from '../styles/Game.module.css';

// 예시로 5x5 퍼즐 데이터를 import (필요 시 7x7, 9x9도 추가)
import { puzzleSize5, puzzleGrid5, acrossClues5, downClues5 } from '../data/puzzleData5';

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { puzzleSize } = location.state || {};

  // 예시로 5x5 퍼즐만 처리 (실제 프로젝트에서는 puzzleSize에 따라 조건 분기)
  let puzzleData = null;
  if (puzzleSize === 5) {
    puzzleData = {
      puzzleSize: puzzleSize5,
      puzzleGrid: puzzleGrid5,
      acrossClues: acrossClues5,
      downClues: downClues5,
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
        {/* 홈으로 버튼은 재사용 가능한 Button 컴포넌트 사용 */}
        <Button onClick={() => navigate('/')}>홈으로</Button>
      </footer>
    </div>
  );
};

export default Game;
