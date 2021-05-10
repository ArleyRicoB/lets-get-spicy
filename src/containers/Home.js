/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeComponent from '../components/Home';

const Home = () => {
  const [data, setData] = useState({});
  const [paragraphs, setParagraphs] = useState(1);
  const [startLorem, setStartLorem] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await axios(
        `${process.env.REACT_APP_API}/?type=all-meat&paras=${paragraphs}&start-with-lorem=${startLorem}`,
      )
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
  }, []);

  console.log(data);

  return <HomeComponent data={data} />;
};

export default Home;
