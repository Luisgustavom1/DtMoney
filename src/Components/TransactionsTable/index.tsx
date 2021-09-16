import React, { useEffect } from 'react';
import api from '../../Services/api';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('transactions').then(res => console.log(res.data))
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className='deposit'>R$ 12.000</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 1.000</td>
            <td>Casa</td>
            <td>4/04/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className='deposit'>R$ 6.000</td>
            <td>Tecnologia</td>
            <td>13/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;