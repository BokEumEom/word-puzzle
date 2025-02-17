import React from 'react';

const Clues = ({ acrossClues, downClues, setActiveClue }) => {
  const handleClick = (clue, direction) => {
    setActiveClue({ ...clue, direction });
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <div>
        <h3>가로 단서</h3>
        {acrossClues.map((clue) => (
          <div key={clue.number} onClick={() => handleClick(clue, 'across')}>
            <strong>{clue.number}.</strong> {clue.clue}
          </div>
        ))}
      </div>
      <div>
        <h3>세로 단서</h3>
        {downClues.map((clue) => (
          <div key={clue.number} onClick={() => handleClick(clue, 'down')}>
            <strong>{clue.number}.</strong> {clue.clue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clues;
