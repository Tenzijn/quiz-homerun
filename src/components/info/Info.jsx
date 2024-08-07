import Buttons from '../buttons/Buttons';
import './Info.css';

const Info = () => {
  return (
    <section className='infoSection'>
      <h1 className='infoSection__title'>Welcome to the Quiz Game</h1>
      <p className='infoSection__text'>
        You will be presented with 10 questions.
      </p>
      <p className='infoSection__text'>Can you score 100%?</p>
      <Buttons />
    </section>
  );
};

export default Info;
