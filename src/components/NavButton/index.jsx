import { useNavigate } from 'react-router';
function NavButton() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div>
      <button className='nav_button' onClick={navigateToHome}>
        Return to List
      </button>
    </div>
  );
}

export default NavButton;
