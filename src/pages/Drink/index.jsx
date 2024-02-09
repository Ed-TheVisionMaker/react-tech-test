import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import DisplayDrink from '../../components/DisplayDrink';
import DisplayText from '../../components/DisplayText';

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
      setDrinkData(drinkData);
    } catch (error) {
      console.error(error);
    }
  };

  const extractRequiredData = (data) => {
    const { name, image_url, abv, tagline, description, food_pairing } =
      data[0];

    const foodPairingWithId = food_pairing.map((food, i) => {
      return { description: food, id: i + 1 };
    });

    return {
      name,
      imageUrl: image_url,
      abv,
      tagline,
      description,
      foodPairing: foodPairingWithId,
    };
  };

  useEffect(() => {
    fetchDrinkData(id);
  }, []);

  return (
    <div className={'drinkContainer'}>
      <DisplayDrink drink={drinkData} />
      <DisplayText drink={drinkData} location={'Drink'} />
    </div>
  );
}

export default Drink;
