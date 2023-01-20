import styled from '@emotion/styled';

const User = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(213, 219, 135) 1px 1px 4px;
  height: fit-content;
`;

const Description = styled.div`
  align-items: center;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: rgba(214, 219, 135, 0.514);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding: 15px;
`;

const UserName = styled.p`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

const UserInfo = styled.p`
  font-size: 20px;

  text-align: center;
`;

const Stats = styled.ul`
  display: flex;

  justify-content: center;
  background-color: rgba(213, 219, 135, 0.356);
  box-shadow: 1px 1px 4px rgb(213, 219, 135);
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  width: calc(100% / 3);
  box-shadow: 1px 1px 4px rgb(213, 219, 135);
`;

const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const StatsQuantity = styled.span`
  font-size: 16px;
  text-align: center;
`;

export {
  User,
  Description,
  UserName,
  UserInfo,
  Avatar,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
};
