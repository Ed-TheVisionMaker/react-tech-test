function DrinkText({ drink, location }) {
  const { name, description, tagline, abv, foodPairing } = drink;

 const textHomePage = () => {
  return (
    <div className='home_textWrapper'>
      <h2 className='home_drinkName'>{name}</h2>
      <p className='home_drinkDescription'>{description}</p>
    </div>
  )
 }

 const foodPairingList = () => {
  return (
    <div className='drink_foodPairingList'>
      <h3>Food Pairing</h3>
      <ul>
        {foodPairing?.map((food) => (
          <li className={'drink_foodPairingItem'} key={food.id}>{food.description}</li>
        ))}
      </ul>
    </div>
  )
 }

 const textDrinkPage = () => {
    const taglineNoPeriod = tagline?.replace('.', '')
  return (
    <div className='drink_textWrapper'>
      <h2 className='drink_drinkName'>{name}</h2>
      <p className='drink_tagline'>{taglineNoPeriod}</p>
      <p className='drink_abv'>{`${abv}%`}</p>
      <p className='drink_description'>{description}</p>
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

export default DrinkText;
