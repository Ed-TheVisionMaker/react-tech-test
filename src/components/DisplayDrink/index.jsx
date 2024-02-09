function DisplayDrink({ drink }) {
  const { name, image } = drink;
  return (
    <div >
      <img className='drinkImage' src={image} alt={name} />
    </div>
  );
}

export default DisplayDrink;
