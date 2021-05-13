/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeComponent from '../components/Home';

/*
  Sum all the complexities calculated inside the function
  O(n) + 1 + O(4n) + 1 + 1 + O(2n) + O(4n) = O(11n) + 3

  Avoid constants
  O(11n)

  Assume that O(x*n), when x is a variable, belongs to O(n)
  the complexity is O(n)
*/
const wordFrecuencyCounting = (data) => {
  const completeText = data.join(' '); // O(n)
  const totalCharacters = completeText.length; // 1
  // const charactersExcludingExtraSpaces = completeText.replace(/\s\s+/g, ' ').length;

  // O(n + n + n + n) = O(4n)
  const formattedText = completeText
    .replace(/\s\s+/g, ' ') // n
    .replace(/[^a-zA-Z -']/g, '') // n
    .toLowerCase() // n
    .split(' '); // n

  const totalWords = formattedText.length; // 1

  const words = {}; // 1

  // O(n*(1 + 1)) = O(2n)
  formattedText.reduce((acc, word) => {
    // n
    if (acc[word]) acc[word] += 1;
    // 1
    else acc[word] = 1; // 1

    return acc;
  }, words);

  // const wordsWithoutRepeating = Object.entries(words).length;
  // O(n + n + 2n) = O(4n)
  const topWords = Object.entries(words) // n
    .sort((a, b) => b[1] - a[1]) // n
    .slice(0, 3) // n
    .map((word) => ({ key: word[0], value: word[1] })); // n*(1 + 1) = 2n

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
