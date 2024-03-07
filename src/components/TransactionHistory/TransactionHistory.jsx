import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';
const TransactionHistory = ({items}) => {
  return (
    <table className={css['custom-table']}>
    <thead>
      <tr>
      <th className={css['custom-table__header']}>Type</th>
          <th className={css['custom-table__header']}>Amount</th>
          <th className={css['custom-table__header']}>Currency</th>
      </tr>
    </thead>
    <tbody>
        {items.map(({id, type, amount, currency}) => (
                   <tr key={id} className={css['custom-table__row']}>
                   <td className={css['custom-table__data']}>{type}</td>
                   <td className={css['custom-table__data']}>{amount}</td>
                   <td className={css['custom-table__data']}>{currency}</td>
                  </tr>
        ))}
        </tbody>
        </table>
  )
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,

};


export default TransactionHistory;