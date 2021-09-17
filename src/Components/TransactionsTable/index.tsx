import React, { useEffect, useState } from 'react';
import api from '../../Services/api';

import { Container } from './styles';

interface ITransactions {
  id: number;
  title: string;
  type: string;
  category: string;
  price: number;
  createdAt: string;
}

const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  
  useEffect(() => {
    api.get('transactions').then(res => setTransactions(res.data.transactions))
  }, [])

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