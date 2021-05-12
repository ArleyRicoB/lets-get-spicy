import React from 'react';
import PropTypes from 'prop-types';
import BarChart from '../Common/BarChart';

const Home = ({
  data,
  totalParagraphs,
  setTotalParagraphs,
  startLorem,
  setStartLorem,
  setSearch,
  search,
  topWords,
  totalWords,
  totalCharacters,
}) => (
  <div className="container">
    <h2>Let&apos;s get Spicy</h2>
    <h6>Bacon Ipsum Generator</h6>

    <div className="row">
      <div className="col-5">{`TOTAL WORDS: ${totalWords}`}</div>
      <div className="col-7">{`TOTAL CHARACTERS: ${totalCharacters}`}</div>
      <div className="col-12">
        <p>HISTOGRAM TOP 3 WORDS:</p>
        <BarChart topWords={topWords} />
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-4">
            <label># PARAGRAPHS</label>
            <input
              value={totalParagraphs}
              type="number"
              min="1"
              onChange={(e) => setTotalParagraphs(+e.target.value)}
            />
          </div>

          <div className="col-4">
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                STARTS WITH LOREM
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick={() => setStartLorem(!startLorem)}
              />
            </div>
          </div>

          <div className="col-4">
            <button type="button" className="btn btn-danger" onClick={() => setSearch(!search)}>
              GENERATE!
            </button>
          </div>
        </div>
      </div>

      <div className="col-12">
        {data?.map((paragraph, index) => (
          <p key={`paragraph-${index}`}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

Home.propTypes = {
  data: PropTypes.instanceOf(Object),
  totalParagraphs: PropTypes.number.isRequired,
  setTotalParagraphs: PropTypes.func.isRequired,
  startLorem: PropTypes.bool.isRequired,
  setStartLorem: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
  setSearch: PropTypes.func.isRequired,
  topWords: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
  totalWords: PropTypes.number.isRequired,
  totalCharacters: PropTypes.number.isRequired,
};

Home.defaultProps = {
  data: [],
  topWords: [],
};

export default Home;
