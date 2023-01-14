// import PropTypes from 'prop-types';

const StatisticList = ({ label, percentage }) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </ul>
  );
};

// StatisticList.defaultProps = {
//   // bla: 'test',
// };

// StatisticList.propTypes = {
//   // bla: PropTypes.string,
// };

export default StatisticList;
