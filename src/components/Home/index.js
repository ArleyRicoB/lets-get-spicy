import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ data }) => (
  <div className="container">
    <h2>Let&apos;s get Spicy</h2>
    <h6>Bacon Ipsum Generator</h6>
    <div>
      {data.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  </div>
);

Home.propTypes = {
  data: PropTypes.instanceOf(Object),
};

Home.defaultProps = {
  data: [],
};

export default Home;
