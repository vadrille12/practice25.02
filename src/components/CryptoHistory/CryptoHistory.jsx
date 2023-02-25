import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatDate } from 'helpers/FormatDate';
import PropTypes from 'prop-types';

export const CryptoHistory = ({transactions}) => {
  return (
    <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    {transactions.map(({id, price, amount, date}, index)=>{
      return(
        <Tr key={id}>
          <Td>{index + 1}</Td>
          <Td>{price}</Td>
          <Td>{amount}</Td>
          <Td>{formatDate(date)}</Td>
        </Tr>
      )
    })}
  </tbody>
</BaseTable>
  );
};

CryptoHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}
