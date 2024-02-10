function DrinkImage({ drink, location }) {
  const { name, imageUrl } = drink;
  return (
      <img className={location === 'Home' ? 'home-drink-image' : 'drink-drink-image'} src={imageUrl} alt={name} />
  );
}

export default DrinkImage;
