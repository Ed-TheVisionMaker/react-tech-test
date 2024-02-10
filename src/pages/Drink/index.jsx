import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import DrinkImage from '../../components/DrinkImage';
import DrinkText from '../../components/DrinkText';
import NavButton from '../../components/NavButton';
import LoadingSpinner from '../../components/LoadingSpinner';

function Drink() {
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
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
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={'drink-wrapper'}>
          <div className={'drink-container'}>
            <DrinkImage drinkData={drinkData} location={'Drink'} />
            <DrinkText drinkData={drinkData} location={'Drink'} />
            <NavButton />
          </div>
        </div>
      )}
    </>
  );
}

export default Drink;
