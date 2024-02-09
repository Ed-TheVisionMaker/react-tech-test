import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayDrink from '../../components/DisplayDrink';
import DisplayText from '../../components/DisplayText';
import ViewMoreDropDown from '../../components/ViewMoreDropDown';

import { Link } from 'react-router-dom';

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
        imageUrl: drink.image_url,
        name: drink.name,
        description: drink.description,
      };
    });
  };

  useEffect(() => {
    fetchDrinkData();
  }, []);

  return (
    <div className={'home_Container'}>
      <h2 className={'home_Title'}>Punk Drinks</h2>
      <ViewMoreDropDown />
      <ul className={'home_drinksContainer'}>
        {drinkList.map((drink) => (
          <Link className='link' key={drink.id} to={`drink/${drink.id}`}>
            <li className='home_drinkListItem'>
              <div className={'home_drinkDisplayWrapper'}>
                <DisplayDrink drink={drink}  location={'Home'} />
                <DisplayText drink={drink} location={'Home'} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
