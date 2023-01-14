// import PropTypes from 'prop-types';
import StatisticTitle from '../Statistics/StatisticTitle';
import StatisticList from '../Statistics/StatisticList';

const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <StatisticTitle />

      {stats.map(({ id, label, percentage }) => (
        <StatisticList key={id} label={label} percentage={percentage} />
      ))}
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
