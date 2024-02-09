import { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function Drink() {
  const params = useParams();
  const id = params.drinkId;

  console.log(id, "id")

  const fetchDrinkData = async (id) => {
    try {
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
      console.log(data, "data")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrinkData(id);
  });


    return <div>Drink</div>;
  };
  
  export default Drink;
  