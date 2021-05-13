import './home.scss';
import React from 'react';
import PropTypes from 'prop-types';
import BarChart from '../Common/Chart';
import Loading from '../Common/Loading';

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
  loading,
}) => (
  <div className="container home">
    <Loading loading={loading} />
    <h2>
      <b>Let&apos;s get Spicy</b>
    </h2>
    <h6>Bacon Ipsum Generator</h6>

    <div className="row graph-section">
      <div className="col-12 col-md-5 mb-3">
        <b>{`TOTAL WORDS: ${totalWords}`}</b>
      </div>
      <div className="col-12 col-md-7 mb-3">
        <b>{`TOTAL CHARACTERS: ${totalCharacters}`}</b>
      </div>
      <div className="col-12">
        <p>
          <b>HISTOGRAM TOP 3 WORDS:</b>
        </p>
        <BarChart topWords={topWords} />
      </div>
    </div>

    <div className="row text-section">
      <div className="col-12 header p-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center justify-content-center">
          <div className="col py-2 d-flex justify-content-center justify-content-md-start align-items-center">
            <label>
              <b># PARAGRAPHS</b>
            </label>
            <input
              className="mx-2 paragraphs-number text-end"
              value={totalParagraphs}
              type="number"
              min="1"
              onChange={(e) => setTotalParagraphs(+e.target.value)}
            />
          </div>

          <div className="col py-2 d-flex justify-content-center justify-content-md-start align-items-center">
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <b>STARTS WITH LOREM</b>
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

          <div className="col py-2 text-center text-lg-end">
            <button type="button" className="btn btn-danger" onClick={() => setSearch(!search)}>
              GENERATE!
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 paragraphs">
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
  loading: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  data: [],
  topWords: [],
};

export default Home;
