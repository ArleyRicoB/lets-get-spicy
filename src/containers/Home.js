import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeComponent from '../components/Home';

const wordFrecuencyCounting = (data) => {
  const completeText = data.join(' ');
  const totalCharacters = completeText.length;
  // const charactersExcludingExtraSpaces = completeText.replace(/\s\s+/g, ' ').length;

  const formattedText = completeText
    .replace(/\s\s+/g, ' ')
    .replace(/[^a-zA-Z -']/g, '')
    .toLowerCase()
    .split(' ');

  const totalWords = formattedText.length;

  const words = {};

  formattedText.reduce((acc, word) => {
    if (acc[word]) acc[word] += 1;
    else acc[word] = 1;

    return acc;
  }, words);

  // const wordsWithoutRepeating = Object.entries(words).length;
  const topWords = Object.entries(words)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((word) => ({ key: word[0], value: word[1] }));

  return {
    totalCharacters,
    totalWords,
    topWords,
    // charactersExcludingExtraSpaces,
  };
};

const Home = () => {
  const [data, setData] = useState([]);
  const [totalParagraphs, setTotalParagraphs] = useState(1);
  const [startLorem, setStartLorem] = useState(false);
  const [totalWords, setTotalWords] = useState(0);
  const [topWords, setTopWords] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_API}/?type=all-meat&paras=${totalParagraphs}${
        startLorem ? '&start-with-lorem=1' : ''
      }`;

      setLoading(true);
      await axios(url)
        .then((response) => {
          if (response && response.data) {
            try {
              const result = wordFrecuencyCounting(response.data);

              setTotalWords(result.totalWords);
              setTotalCharacters(result.totalCharacters);
              setTopWords(result.topWords);
              setData(response.data);
            } catch (err) {
              setError({ message: 'Error while processing data', error: err });
            }
          }

          setLoading(false);
        })
        .catch((err) => {
          setError({ message: 'Error getting data', error: err });
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
      topWords={topWords}
      setSearch={setSearch}
      search={search}
      loading={loading}
    />
  );
};

export default Home;
