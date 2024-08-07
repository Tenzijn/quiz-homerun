import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

import Loading from '../loading/Loading';

import './Carousel.css';

const Carousel = () => {
  const { questions, isLoading } = useContext(ApiContext);
  console.log('questions', questions);
  return isLoading ? (
    <Loading />
  ) : (
    <div className='slider'>
      <div className='slider__numbers'>
        {/* Add the numbers of the slides here */}
        {questions.map((question, index) => (
          <a href={`#slide-${index + 1}`} key={index + 1}>
            {index + 1}
          </a>
        ))}
      </div>

      <div className='slides'>
        {questions.map((question, index) => (
          <div id={`slide-${index + 1}`} key={index + 1}>
            <h3>{question.question}</h3>
            <div className='answers'>
              {question.incorrect_answers.map((answer, index) => (
                <div className='answer' key={index}>
                  {answer}
                </div>
              ))}
              <div className='answer'>{question.correct_answer}</div>
            </div>
          </div>
        ))}
        <div id='slide-5'>5</div>
      </div>
    </div>
  );
};

export default Carousel;
