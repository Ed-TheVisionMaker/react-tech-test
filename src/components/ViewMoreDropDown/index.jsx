function ViewMoreDropDown(props) {
  const {numberOfDrinks, handleNumberChange, handleShowDropDown, showDropDown} = props;

  return (
    <div className='view-more-container'>
      <div className='view-more-display-wrapper'>
        <div>{numberOfDrinks}</div>
        <button onClick={() => handleShowDropDown()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='view-more-chevron-down'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
        </button>
      </div>
      {showDropDown && (
        <div className='view-more-options-wrapper'>
          <button id='button1' onClick={(e) => handleNumberChange(e)}>
            10
          </button>
          <button id='button2' onClick={(e) => handleNumberChange(e)}>
            20
          </button>
          <button id='button3' onClick={(e) => handleNumberChange(e)}>
            30
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewMoreDropDown;
