import { useContext } from 'react';
import Buttons from '../buttons/Buttons';
import { ApiContext } from '../../context/ApiContext';

import './Info.css';

const Info = () => {
  const { setDifficulty, setType } = useContext(ApiContext);

  return (
    <section className='infoSection'>
      <div className='infoSection__title'>
        <h1>Welcome to the Quiz Game</h1>
      </div>

      <p className='infoSection__text'>
        You will be presented with 10 questions.
      </p>

      <h3>
        Select the difficulty and type of questions you would like to answer:
      </h3>
      <div className='options'>
        <select
          defaultValue='easy'
          onChange={(selected) => setDifficulty(selected.target.value)}
        >
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>

        <select
          defaultValue={'multiple'}
          onChange={(selected) => setType(selected.target.value)}
        >
          <option value='multiple'>Multiple Choice</option>
          <option value='boolean'>True / False</option>
        </select>
      </div>

      <Buttons />
    </section>
  );
};

export default Info;
