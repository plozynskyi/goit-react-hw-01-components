import styled from '@emotion/styled';

const TransactionBox = styled.section`
  margin-bottom: 30px;
`;

const Table = styled.table`
  background-color: #ffffff;
  box-shadow: 1px 1px 4px grey;
  max-width: 350px;
  th,
  td {
    padding: 15px;
    height: 30px;
  }
`;

const Thead = styled.thead`
  max-width: 350px;
  th {
    color: #fff;
    background-color: rgb(96, 99, 62);
  }
`;

const Tbody = styled.tbody`
  tr:nth-of-type(odd) {
    background-color: rgba(214, 219, 135, 0.3);
  }
  td {
    min-width: 450px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`;

export { TransactionBox, Table, Thead, Tbody };
