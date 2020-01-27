import DataList from './data-list';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/planets/')
      .then(response => {
        // console.log(response.data);
        setData(response.data.results);
      })
      .catch(error => {
        console.log('this is an error, check your code', error);
      });
  }, []);

  return (
    <>
      <div className="planet">
        {data.map(planet => {
          // console.log(planet);
          return <DataList {...planet} />;
        })}
      </div>
    </>
  );
};

export default Data;
