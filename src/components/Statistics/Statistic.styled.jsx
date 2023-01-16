import styled from '@emotion/styled';

const StatisticBox = styled.section`
  background-color: rgb(238, 229, 229);
`;

const StatisticTitle = styled.h2`
  margin: 0;
  padding: 50px;
  background-color: transparent;
  text-align: center;
`;

const StatisticList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const StatisticItem = styled.li`
  margin: 0;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  text-align: center;
  ${statsBackgroundColor}
  ${statsColor}
`;

const StatsText = styled.span`
  font-size: 24px;
  font-weight: 500;
  /* filter: invert; */
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function statsBackgroundColor() {
  const color = getRandomHexColor();

  return `
                background-color: ${color}; 
        `;
}

function statsColor() {
  const color = getRandomHexColor();

  return `
                color: ${color};
        `;
}

export {
  StatisticBox,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatsText,
};
