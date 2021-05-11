/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeComponent from '../components/Home';

const Home = () => {
  const [data, setData] = useState([]);
  const [totalParagraphs, setTotalParagraphs] = useState(1);
  const [startLorem, setStartLorem] = useState(false);
  const [totalWords, setTotalWords] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_API}/?type=all-meat&paras=${totalParagraphs}${
        startLorem ? '&start-with-lorem=1' : ''
      }`;

      await axios(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
  }, [search]);

  return (
    <HomeComponent
      data={data}
      totalParagraphs={totalParagraphs}
      setTotalParagraphs={setTotalParagraphs}
      startLorem={startLorem}
      setStartLorem={setStartLorem}
      totalWords={totalWords}
      totalCharacters={totalCharacters}
      setSearch={setSearch}
      search={search}
    />
  );
};

export default Home;
