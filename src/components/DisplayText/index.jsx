function DisplayText({ drink }) {
  const { name, description } = drink;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default DisplayText;
