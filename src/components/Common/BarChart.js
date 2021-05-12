import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './chart.scss';

const Chart = ({ topWords }) => (
  <div className="chart w-100">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={topWords}>
        <XAxis dataKey="key" />
        <YAxis />
        <Bar dataKey="value" fill="#BDBDBD" maxBarSize={100} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

Chart.propTypes = {
  topWords: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
};

Chart.defaultProps = {
  topWords: [],
};

export default Chart;
