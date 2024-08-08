import { useState, useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

import Loading from '../loading/Loading';

import './Carousel.css';

const Carousel = () => {
  const {
    userAnswers,
    questions,
    isLoading,
    difficulty,
    currentQuestion,
    setCurrentQuestion,
    setQuestions,
    setIsLoading,
    setIsGameStart,
    setIsGameOver,
    setScore,
    setUserAnswers,
    setDifficulty,
    setType,
  } = useContext(ApiContext);
  const [disabled, setDisabled] = useState([
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

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className='slider'>
        <div className='slider__numbers'>
          {/* Add the numbers of the slides here */}
          {questions.map((question, index) => (
            <a
              href={`#slide-${index + 1}`}
              key={index + 1}
              onClick={() => {
                setCurrentQuestion(index);
              }}
              className={currentQuestion === index ? 'active' : ''}
              style={{
                opacity: disabled[index] ? '0.5' : null,
              }}
            >
              {index + 1}
            </a>
          ))}
        </div>
        <span
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
          }}
        >
          Reset
        </span>

        <div className='slides'>
          {questions.map((question, index) => (
            <div id={`slide-${index + 1}`} key={index + 1}>
              <h3
                className='question'
                dangerouslySetInnerHTML={{ __html: question.question }}
              ></h3>
              <div className='answers'>
                {question.answers.map((answer, answerIndex) => (
                  <div
                    className={`answer`}
                    key={answerIndex}
                    value={answer}
                    onClick={(e) => {
                      const selectedAnswer = e.target.innerText;
                      if (selectedAnswer === question.correct_answer) {
                        setScore((prev) => prev + 1);
                      }

                      setUserAnswers([...userAnswers, selectedAnswer]);
                      setDisabled(() => {
                        const updatedDisabled = [...disabled];
                        updatedDisabled[index] = true;
                        return updatedDisabled;
                      });
                      userAnswers.length === questions.length - 1
                        ? setIsGameOver(true)
                        : null;
                    }}
                    style={{
                      pointerEvents: disabled[index] ? 'none' : null,
                      backgroundColor:
                        disabled[index] && question.correct_answer === answer
                          ? 'green'
                          : question.correct_answer !== answer &&
                            userAnswers.includes(answer)
                          ? 'red'
                          : null,
                    }}
                  >
                    {answer}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div id='slide-5'>5</div>
        </div>
        <div className='questionInfo'>
          <p className='questionInfo__text'>{difficulty} </p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
