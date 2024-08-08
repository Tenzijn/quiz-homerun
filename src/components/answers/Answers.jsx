import './Answers.css';

const Answers = (answers) => {
  return (
    <div className='answers'>
      {answers.map((answer, index) => (
        <button key={index} className='answer'>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
