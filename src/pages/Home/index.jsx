import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [drinkList, setDrinkList] = useState([]);

  const fetchDrinkData = async () => {
    try {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers');
      const drinkList = createDrinkList(data);
      setDrinkList(drinkList);
    } catch (error) {
      console.error(error);
    }
  };

  const createDrinkList = (data) => {
    const drinksRequired = data.slice(0, 10);
    return drinksRequired.map((drink) => {
      return {
        id: drink.id,
        image: drink.image_url,
        name: drink.name,
        description: drink.description,
      };
    });
  };

  useEffect(() => {
    console.log('useEffect called');
    fetchDrinkData();
  }, []);

  return <div>Home</div>;
}

export default Home;
