import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import Reset from '../reset/Reset';
import './Result.css';

const Result = () => {
  const { questions, score } = useContext(ApiContext);
  return (
    <>
      <Reset />
      <div className='result'>
        <h2 className='result__score'>
          Your score is <span className='result__score__number'>{score}</span>{' '}
          out of{' '}
          <span className='result__score__number'>{questions.length}</span>
        </h2>
      </div>
    </>
  );
};

export default Result;
