// src/components/Modal.jsx
import { useState } from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ onClose, onSelect }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSize) {
      onSelect(Number(selectedSize));
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <h2 className={styles.title}>퍼즐 크기 선택</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <select
              id="puzzleSize"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className={styles.select}
            >
              <option value="" disabled>
                선택하세요
              </option>
              <option value="5">5×5</option>
              <option value="7">7×7</option>
              <option value="9">9×9</option>
            </select>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.primaryButton}>
              확인
            </button>
            <button type="button" onClick={onClose} className={styles.secondaryButton}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
