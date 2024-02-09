function DisplayDrink({ drink }) {
  const { name, imageUrl } = drink;
  return (
      <img className='drinkImage' src={imageUrl} alt={name} />
  );
}

export default DisplayDrink;
