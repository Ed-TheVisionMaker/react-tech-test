import { ClickAwayListener } from '@mui/base';
import './DropdownMenu.css';
import { useEffect } from 'react';

function DropdownMenu(props) {
  const {
    numberOfDrinks,
    setNumberOfDrinks,
    handleNumberChange,
    handleShowDropdown,
    handleClickAway,
    showDropdown,
  } = props;

  useEffect(() => {
    const storedNumberOfDrinks = sessionStorage.getItem('numberOfDrinks');
    if (storedNumberOfDrinks) {
      const parsedNumber = parseInt(storedNumberOfDrinks);
      setNumberOfDrinks(parsedNumber);
    }
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='dropdown-container'>
        <div className='dropdown-display-wrapper'>
          <div className='dropdown-display-number'>{numberOfDrinks}</div>
          <button
            className='dropdown-dropdown-button'
            onClick={handleShowDropdown}
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
        {showDropdown && (
          <div className='dropdown-options-wrapper'>
            <button
              className='dropdown-options-button'
              onClick={handleNumberChange}
            >
              10
            </button>
            <button
              className='dropdown-options-button'
              onClick={handleNumberChange}
            >
              20
            </button>
            <button
              className='dropdown-options-button'
              onClick={handleNumberChange}
            >
              30
            </button>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default DropdownMenu;
