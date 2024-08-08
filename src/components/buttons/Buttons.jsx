import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import './Buttons.css';

const Buttons = () => {
  const { setIsGameStart } = useContext(ApiContext);

  return (
    <div className='btn btn--primary' onClick={() => setIsGameStart(true)}>
      START
    </div>
  );
};

export default Buttons;
