function DrinkImage({ drinkData, location }) {
  const { name, imageUrl } = drinkData;
  return (
      <img className={location === 'Home' ? 'home-drink-image' : 'drink-drink-image'} src={imageUrl} alt={name} />
  );
}

export default DrinkImage;
