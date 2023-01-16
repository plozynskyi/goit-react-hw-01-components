// import PropTypes from 'prop-types';

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
      <StatisticTitle>{title}</StatisticTitle>
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

// Statistics.defaultProps = {
//   // bla: 'test',
// };

// Statistics.propTypes = {
//   // bla: PropTypes.string,
// };

export default Statistics;
