import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

import './ProgressBar.css';

const ProgressBar = () => {
  const { currentQuestion } = useContext(ApiContext);

  return (
    <div className='progressBar'>
      <div
        className='progressBar__progress'
        style={{ width: `${currentQuestion * 10}%` }}
      >
        {' '}
        {currentQuestion * 10} %{' '}
      </div>
    </div>
  );
};

export default ProgressBar;
