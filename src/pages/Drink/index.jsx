import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

{
  /*The detail screen should display the
drink's image,
name of the drink, 
alcohol by volume (abv),
tagline,
full description,
and one other piece of data of your choice. */
}

function Drink() {
  const [drinkData, setDrinkData] = useState({});
  const params = useParams();
  const id = params.drinkId;

  const fetchDrinkData = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.punkapi.com/v2/beers/${id}`
      );
      const drinkData = extractRequiredData(data);
      console.log(drinkData, 'drinkData');
      setDrinkData(drinkData);
    } catch (error) {
      console.error(error);
    }
  };

  const extractRequiredData = (data) => {
    const { name, image_url, abv, tagline, description, food_pairing } =
      data[0];
    return {
      name,
      imageUrl: image_url,
      abv,
      tagline,
      description,
      foodPairing: food_pairing,
    };
  };

  useEffect(() => {
    fetchDrinkData(id);
  }, []);

  return <div>{drinkData.abv}</div>;
}

export default Drink;
