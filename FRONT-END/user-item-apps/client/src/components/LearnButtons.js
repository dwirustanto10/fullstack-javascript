import React from 'react';

const LearnButtons = () => {
  const [number, setNumber] = useState(0);

  const clickHandler = () => {
    // console.log(`number: ${number}`);

    alert(`number ${number}`);
  };

  <div className="container">
    <button onClick={() => clickHandler} className="btn btn-sm btn-primary">
      click's Me
    </button>
    <h1>{number}</h1>
  </div>;
};

export default LearnButton;
