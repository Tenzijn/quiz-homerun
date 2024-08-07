import { useState, useEffect } from 'react';
import { ApiContext } from './context/ApiContext';

import axios from 'axios';

import ProgressBar from './components/progressBar/progressBar';
import ScoreBar from './components/scorebar/ScoreBar';
import Logo from './components/logo/Logo';

import './App.css';
import Info from './components/info/Info';
import Carousel from './components/carousel/Carousel';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [difficulty, setDifficulty] = useState('easy');
  const [type, setType] = useState('multiple');
  const [isGameStart, setIsGameStart] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(4);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}&type=${type}`
        );
        console.log(response);
        setQuestions(response.data.results);
        setIsLoading(false);
        isGameStart ? setIsGameOver(false) : null;
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    isGameStart ? fetchQuestions() : null;
  }, [isGameStart, difficulty, type]);

  const restart = () => {
    setIsLoading(true);
    setIsGameStart(false);
    setIsGameOver(false);
    setScore(0);
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <ApiContext.Provider
      value={{
        questions,
        setQuestions,
        isLoading,
        setIsLoading,
        difficulty,
        setDifficulty,
        type,
        setType,
        isGameStart,
        setIsGameStart,
        isGameOver,
        setIsGameOver,
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setUserAnswers,
        isCorrect,
        setIsCorrect,
        restart,
      }}
    >
      <main className='App'>
        <Logo />
        <ScoreBar />
        {/* <Info /> */}
        <Carousel />
        <ProgressBar />
      </main>
    </ApiContext.Provider>
  );
}

export default App;
