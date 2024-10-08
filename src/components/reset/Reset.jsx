import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import './Reset.css';

const Reset = () => {
  const {
    setQuestions,
    setIsLoading,
    setIsGameStart,
    setIsGameOver,
    setScore,
    setCurrentQuestion,
    setUserAnswers,
    setDifficulty,
    setType,
    setDisabled,
  } = useContext(ApiContext);
  return (
    <div
      className='resetBtn'
      onClick={() => {
        setQuestions([]);
        setIsLoading(true);
        setIsGameStart(false);
        setIsGameOver(false);
        setScore(0);
        setCurrentQuestion(0);
        setUserAnswers([]);
        setDifficulty('easy');
        setType('multiple');
        setDisabled([
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
      }}
    >
      Reset
    </div>
  );
};

export default Reset;
