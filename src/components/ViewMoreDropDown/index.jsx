import { useState } from 'react';

function ViewMoreDropDown() {
  const [option, setOption] = useState(10);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleOptionChange = (e) => {
    setOption(e.target.innerText);
  };

  const handleShowDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };
  return (
    <div className='viewMore_Container'>
      <div className='viewMore_displayWrapper'>
        <div>{option}</div>
        <button onClick={handleShowDropDown}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='home-chevronDown'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
        </button>
      </div>
      <div className='viewMore_optionsWrapper'>
        <button id='button1' onClick={handleOptionChange}>
          10
        </button>
        <button id='button2' onClick={(e) => handleOptionChange(e)}>
          20
        </button>
        <button id='button3' onClick={(e) => handleOptionChange(e)}>
          30
        </button>
      </div>
    </div>
  );
}

export default ViewMoreDropDown;
