function DisplayText({ drink }) {
  const { name, description } = drink;

  return (
    <div className='textWrapper'>
      <h2 className='drinkName'>{name}</h2>
      <p className='drinkDescription'>{description}</p>
    </div>
  );
}

export default DisplayText;
