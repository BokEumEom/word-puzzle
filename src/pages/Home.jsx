import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // "게임 시작" 버튼 클릭 시 모달 오픈
  const handleGameStartClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // 모달에서 퍼즐 크기 선택 후 확인하면 Game 페이지로 이동
  const handlePuzzleSizeSelect = (size) => {
    setShowModal(false);
    navigate('/game', { state: { puzzleSize: size } });
  };

  // "게임 방법" 버튼 클릭 시 Tutorial 페이지로 이동
  const handleTutorialClick = () => {
    navigate('/tutorial');
  };

  return (
    <div className={styles.homeContainer}>
      <Header />
      <main className={styles.main}>
        <div className={styles.heroImage}></div>
        <nav className={styles.menuButtons}>
          <Button onClick={handleGameStartClick}>게임 시작</Button>
          <Button onClick={handleTutorialClick}>게임 방법</Button>
        </nav>
      </main>
      {showModal && (
        <Modal onClose={handleModalClose} onSelect={handlePuzzleSizeSelect} />
      )}
    </div>
  );
};

export default Home;
