import { useState, useEffect } from 'react';
import { ApiContext } from './context/ApiContext';

import axios from 'axios';

import ProgressBar from './components/progressBar/progressBar';
import ScoreBar from './components/scorebar/ScoreBar';
import Logo from './components/logo/Logo';

import './App.css';
import Info from './components/info/Info';
import Carousel from './components/carousel/Carousel';
import Result from './components/result/Result';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [difficulty, setDifficulty] = useState('easy');
  const [type, setType] = useState('multiple');
  const [isGameStart, setIsGameStart] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}&type=${type}`
        );

        response.data.results.forEach((question) => {
          question.answers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          question.answers.sort(() => Math.random() - 0.5);
        });
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
        restart,
      }}
    >
      <main className='App'>
        <Logo />
        <ScoreBar />
        {isGameStart && !isGameOver ? (
          <Carousel />
        ) : isGameOver ? (
          <Result />
        ) : (
          <Info />
        )}
        <ProgressBar />
      </main>
    </ApiContext.Provider>
  );
}

export default App;
