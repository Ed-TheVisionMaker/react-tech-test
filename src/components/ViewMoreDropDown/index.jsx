import { ClickAwayListener } from '@mui/base';

function ViewMoreDropDown(props) {
  const {
    numberOfDrinks,
    handleNumberChange,
    handleShowDropDown,
    handleClickAway,
    showDropDown,
  } = props;

  return (
    <ClickAwayListener onClickAway={() => handleClickAway()}>
      <div className='dropdown-container'>
        <div className='dropdown-display-wrapper'>
          <div className={'dropdown-display-number'}>{numberOfDrinks}</div>
          <button
            className={'dropdown-dropdown-button'}
            onClick={() => handleShowDropDown()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='dropdown-chevron-down'
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
          <div className='dropdown-options-wrapper'>
            <button
              className='dropdown-options-button'
              onClick={(e) => handleNumberChange(e)}
            >
              10
            </button>
            <button
              className='dropdown-options-button'
              onClick={(e) => handleNumberChange(e)}
            >
              20
            </button>
            <button
              className='dropdown-options-button'
              onClick={(e) => handleNumberChange(e)}
            >
              30
            </button>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default ViewMoreDropDown;
