import React from 'react';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';
import { useTransaction } from '../../hooks/TransactionContext';

import { Container } from './styles';

const Summary: React.FC = () => {  
  const { transactions } = useTransaction();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.price;
      acc.total += transaction.price;
    } else {
      acc.withdraw += transaction.price;
      acc.total -= transaction.price
    }

    return acc
  }, {
    withdraw: 0,
    deposit: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt='Icon img' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt='Icon img' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className='highlight-total'>
        <header>
          <p>Total</p>
          <img src={Total} alt='Icon img' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}

export default Summary;