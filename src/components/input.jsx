import React, { useState } from 'react';
import './style.css';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [elementVisible, setElementVisible] = useState(false);
  const [boxColor, setBoxColor] = useState(''); 

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    console.log(newValue);
    setInputValue(newValue);
    setBoxColor(newValue);
  };

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      setElementVisible(true);
    }
  };

  const boxStyle = {
    width: '200px',
    height: '150px',
    backgroundColor: boxColor, 
    border: '1px solid black',
  };

  return (
    <>
      <input
        className='center'
        type='text'
        id='color'
        placeholder='add color name...'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKey}
      />
      {elementVisible && (
        <div style={boxStyle} className='center'>
          {inputValue}
        </div>
      )}
    </>
  );
};

export default Input;
