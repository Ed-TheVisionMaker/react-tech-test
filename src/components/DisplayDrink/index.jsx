function DisplayDrink({ drink }) {
  const { name, image } = drink;
  return (
      <img className='drinkImage' src={image} alt={name} />
  );
}

export default DisplayDrink;
