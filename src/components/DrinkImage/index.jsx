function DrinkImage({ drink, location }) {
  const { name, imageUrl } = drink;
  return (
      <img className={location === 'Home' ? 'home_drinkImage' : 'drink_drinkImage'} src={imageUrl} alt={name} />
  );
}

export default DrinkImage;
