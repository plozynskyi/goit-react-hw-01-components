// import PropTypes from 'prop-types';
import css from '../Statistics.module.css';

const StatisticList = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

// StatisticList.defaultProps = {
//   // bla: 'test',
// };

// StatisticList.propTypes = {
//   // bla: PropTypes.string,
// };

export default StatisticList;
