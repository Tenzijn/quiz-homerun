import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

import './ProgressBar.css';

const ProgressBar = () => {
  const { userAnswers } = useContext(ApiContext);
  const totalQuestions = 10;
  const totalNumberOfAnswers = userAnswers.length;
  const percentage = (totalNumberOfAnswers / totalQuestions) * 100;

  return (
    <div className='progressBar'>
      {totalNumberOfAnswers === 0 ? null : (
        <div
          className='progressBar__progress'
          style={{ width: `${percentage}%` }}
        >
          {' '}
          {percentage} %{' '}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
