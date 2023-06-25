import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const DetailPage = () => {

  const { category } = useParams();


  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [err, setErr] = useState('');

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
        },
        headers: {

        }
      });
      setLoad(false);
      setData(response.data['meals']);
    } catch (err) {
      setLoad(false);
      setErr(err);
      console.log(err);
    }

  }
  useEffect(() => {
    getData();
  }, []);

  if (isLoad) {
    return <h1>Loading....</h1>
  }


  console.log(data);
  return (
    <div className='grid grid-cols-3 items-start p-9 gap-7 '>
      {data.map((meal) => {
        return <div key={meal.idMeal} className='space-y-3 shadow-2xl p-5 cursor-pointer'>
          <h1 className='text-center text-2xl font-bold'>{meal.strMeal}</h1>
          <img className='w-full' src={meal.strMealThumb} alt="" />

        </div>
      })}

    </div>
  )
}

export default DetailPage
