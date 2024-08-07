import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

import './ScoreBar.css';

const ScoreBar = () => {
  const { score } = useContext(ApiContext);
  return (
    <div className='scoreBar'>
      <h2>Score: {score} / 10</h2>
    </div>
  );
};

export default ScoreBar;
