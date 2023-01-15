// import PropTypes from 'prop-types';
import css from '../Statistics.module.css';

const StatisticTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

// StatisticTitle.defaultProps = {
//   // bla: 'test',
// };

// StatisticTitle.propTypes = {
//   // bla: PropTypes.string,
// };

export default StatisticTitle;
