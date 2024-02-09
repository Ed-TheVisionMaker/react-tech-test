import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import DisplayDrink from '../../components/DisplayDrink';
import DisplayText from '../../components/DisplayText';
import NavButton from '../../components/NavButton';

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
    const {
      name,
      image_url: imageUrl,
      abv,
      tagline,
      description,
      food_pairing: foodPairing,
    } = data[0];

    const foodPairingWithId = foodPairing.map((food, i) => {
      return { description: food, id: i + 1 };
    });

    return {
      name,
      imageUrl,
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
    <div className={'drink_drinkContainer'}>
      <div className={'drink_drinkWrapper'}>
        <DisplayDrink drink={drinkData} location={'Drink'} />
        <DisplayText drink={drinkData} location={'Drink'} />
        <NavButton />
      </div>
    </div>
  );
}

export default Drink;
