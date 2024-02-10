function DrinkText({ drink, location }) {
  const { name, description, tagline, abv, foodPairing } = drink;

 const textHomePage = () => {
  return (
    <div className='home-text-wrapper'>
      <h2 className='home-drink-name'>{name}</h2>
      <p className='home-drink-description'>{description}</p>
    </div>
  )
 }

 const foodPairingList = () => {
  return (
    <div className='drink-food-pairing-list'>
      <h3>Food Pairing</h3>
      <ul>
        {foodPairing?.map((food) => (
          <li className={'drink-food-pairing-item'} key={food.id}>{food.description}</li>
        ))}
      </ul>
    </div>
  )
 }

 const textDrinkPage = () => {
    const taglinePeriodRemoved = tagline?.replace('.', '')
  return (
    <div className='drink-text-wrapper'>
      <h2 className='drink-drink-name'>{name}</h2>
      <p className='drink-tagline'>{taglinePeriodRemoved}</p>
      <p className='drink-abv'>{`${abv}%`}</p>
      <p className='drink-description'>{description}</p>
      {foodPairingList()}
    </div>
  )
 }

  return (
    <>
    {location === 'Home' && textHomePage()}
    {location === 'Drink' && textDrinkPage()}
    </>
  );
}

export default DrinkText;
