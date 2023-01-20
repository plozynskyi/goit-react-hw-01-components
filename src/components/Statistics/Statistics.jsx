import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatsText,
} from './Statistic.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticBox>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <StatsText>{label}</StatsText>
            <StatsText>{percentage}%</StatsText>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
