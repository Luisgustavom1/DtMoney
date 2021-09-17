import React from 'react';

import { useTransaction } from '../../hooks/TransactionContext';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  const { transactions } = useTransaction();
  
  return(
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.price)}
                </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;