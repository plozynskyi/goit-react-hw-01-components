// import PropTypes from 'prop-types';
// import css from '../Statistics.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

// Transaction.defaultProps = {
//   // bla: 'test',
// };

// Transaction.propTypes = {
//   // bla: PropTypes.string,
// };

export default Transaction;
