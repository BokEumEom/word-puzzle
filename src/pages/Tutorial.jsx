// src/pages/Tutorial.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Tutorial.module.css';

const tutorialSteps = [
  {
    title: "튜토리얼 1: 게임 소개",
    description:
      "이 게임은 한글 낱말 퍼즐로, 가로와 세로 단서를 통해 퍼즐을 완성하는 게임입니다. 기본 조작법을 익혀보세요.",
    image: "/images/tutorial1.jpg", // 실제 이미지 URL로 교체
  },
  {
    title: "튜토리얼 2: 퍼즐 입력",
    description:
      "각 칸에 한 글자씩 입력하여 정답을 완성합니다. 터치로 쉽게 입력하고, 제출 버튼을 눌러 확인하세요.",
    image: "/images/tutorial2.jpg",
  },
  {
    title: "튜토리얼 3: 단서 확인",
    description:
      "화면 상단의 단서(가로열쇠, 세로열쇠)를 확인하며 퍼즐의 단어를 유추합니다.",
    image: "/images/tutorial3.jpg",
  },
  {
    title: "튜토리얼 4: 제출 및 리셋",
    description:
      "입력이 완료되면 제출 버튼을 눌러 정답 여부를 확인하고, 필요시 리셋 버튼을 통해 다시 도전할 수 있습니다.",
    image: "/images/tutorial4.jpg",
  },
];

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const totalSteps = tutorialSteps.length;
  const { title, description, image } = tutorialSteps[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // 마지막 단계면 게임 시작 혹은 홈으로 이동 (원하는 동작으로 변경)
      navigate('/');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    // 튜토리얼 전체 건너뛰기
    navigate('/');
  };

  return (
    <div className={styles.tutorialContainer}>
      <header className={styles.header}>
        <h2>게임 방법 튜토리얼</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.progress}>
            {`Step ${currentStep + 1} of ${totalSteps}`}
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
          {image && (
            <img src={image} alt={title} className={styles.cardImage} />
          )}
        </div>
        <div className={styles.navButtons}>
          {currentStep > 0 && (
            <button onClick={handlePrev} className={styles.navButton}>
              이전
            </button>
          )}
          <button onClick={handleNext} className={styles.navButton}>
            {currentStep === totalSteps - 1 ? "완료" : "다음"}
          </button>
        </div>
        <button onClick={handleSkip} className={styles.skipButton}>
          튜토리얼 건너뛰기
        </button>
      </main>
      <footer className={styles.footer}>
        <Link to="/" className={styles.homeLink}>
          홈으로
        </Link>
      </footer>
    </div>
  );
};

export default Tutorial;
