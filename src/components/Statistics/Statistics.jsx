// import PropTypes from 'prop-types';
import StatisticTitle from './Stat-components/StatisticTitle';
import StatisticList from './Stat-components/StatisticList';
import css from './Statistics.module.css';

const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <StatisticTitle title="Upload stats" />
      <ul className={css.stat}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticList key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

// Statistics.defaultProps = {
//   // bla: 'test',
// };

// Statistics.propTypes = {
//   // bla: PropTypes.string,
// };

export default Statistics;
