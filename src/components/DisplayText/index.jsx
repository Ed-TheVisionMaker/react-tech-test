function DisplayText({ drink, location }) {
  const { name, description, tagline, abv, foodPairing } = drink;

 const textHomePage = () => {
  return (
    <div className='textWrapper'>
      <h2 className='drinkName'>{name}</h2>
      <p className='drinkDescription'>{description}</p>
    </div>
  )
 }

 const foodPairingList = () => {
  return (
    <div className='foodPairingList'>
      <h3>Food Pairing</h3>
      <ul>
        {foodPairing.map((food) => (
          <li key={food.id}>{food.description}</li>
        ))}
      </ul>
    </div>
  )
 }

 const textDrinkPage = () => {
  return (
    <div className='textWrapper'>
      <h2 className='drinkName'>{name}</h2>
      <p className='tagline'>{tagline}</p>
      <p className='abv'>{abv}</p>
      <p className='description'>{description}</p>
      {foodPairingList()}
    </div>
  )
 }

  return (
    <>
    {location === 'Home'&& textHomePage()}
    {location === 'Drink' && textDrinkPage()}
    </>
  );
}

export default DisplayText;
