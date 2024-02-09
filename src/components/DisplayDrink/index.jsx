function DisplayDrink({ drink }) {
  const { name, image, id } = drink;
  return (
    <div >
      <h2>{name}</h2>
      <img className='drinkImage' src={image} alt={name} />
    </div>
  );
}

export default DisplayDrink;
