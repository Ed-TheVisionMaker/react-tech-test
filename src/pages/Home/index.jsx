import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayDrink from '../../components/DisplayDrink';
import DisplayText from '../../components/DisplayText';
import ViewMoreDropDown from '../../components/ViewMoreDropDown';

import { Link } from 'react-router-dom';

function Home() {
  const [drinksList, setDrinksList] = useState([]);
  const [numberOfDrinks, setNumberOfDrinks] = useState(10);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  const handleNumberChange = (e) => {
    const parseDrinksNumber = parseInt(e.target.innerText);
    setNumberOfDrinks(parseDrinksNumber);
    setShowDropDown((prevState) => !prevState);
  };


  const fetchDefaultData = async () => {
    try {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers');
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLargeData = async () => {
    try {
      const { data } = await axios.get(
        'https://api.punkapi.com/v2/beers?per_page=30'
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRequiredDrinks = async (numberOfDrinks) => {
    let data = [];
    if (numberOfDrinks === 10 || numberOfDrinks === 20) {
      data = await fetchDefaultData();
    }
    if (numberOfDrinks === 30) {
      data = await fetchLargeData();
    }
    createDrinksList(data);
  };

  const trimDrinkData = (data) => {
    let trimmedData = [];
    if (numberOfDrinks === 10) {
      trimmedData = data.slice(0, 10);
    } else if (numberOfDrinks === 20) {
      trimmedData = data.slice(0, 20);
    } else if (numberOfDrinks === 30) {
      trimmedData = data;
    }
    return trimmedData;
  };

  const createDrinksList = (data) => {
    const drinksRequired = trimDrinkData(data);
    const drinksList = drinksRequired.map((drink) => {
      return {
        id: drink.id,
        imageUrl: drink.image_url,
        name: drink.name,
        description: drink.description,
      };
    });
    setDrinksList(drinksList);
  };

  useEffect(() => {
    fetchRequiredDrinks(numberOfDrinks);
  }, [numberOfDrinks]);

  return (
    <div className={'home_Container'}>
      <h2 className={'home_Title'}>Punk Drinks</h2>
      <ViewMoreDropDown
        numberOfDrinks={numberOfDrinks}
        handleNumberChange={handleNumberChange}
        handleShowDropDown={handleShowDropDown}
        showDropDown={showDropDown}
      />
      <ul className={'home_drinksContainer'}>
        {drinksList.map((drink) => (
          <Link className='link' key={drink.id} to={`drink/${drink.id}`}>
            <li className='home_drinkListItem'>
              <div className={'home_drinkDisplayWrapper'}>
                <DisplayDrink drink={drink} location={'Home'} />
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
