import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

import './ScoreBar.css';

const ScoreBar = () => {
  const { score, userAnswers } = useContext(ApiContext);
  return (
    <div className='scoreBar'>
      <h2>
        {userAnswers.length > 0 && userAnswers.length < 10
          ? `Score: ${score} / 10`
          : userAnswers.length === 10
          ? 'Game Over'
          : 'Start Game'}
      </h2>
    </div>
  );
};

export default ScoreBar;
