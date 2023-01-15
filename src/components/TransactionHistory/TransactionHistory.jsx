// import PropTypes from 'prop-types';

import Transaction from './Transaction/Transaction';
// import css from './Friends.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

// Friends.defaultProps = {
//   // bla: 'test',
// };

// Friends.propTypes = {
//   // bla: PropTypes.string,
// };

export default TransactionHistory;
