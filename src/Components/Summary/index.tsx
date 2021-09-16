import React from 'react';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import { Container } from './styles';

const Summary: React.FC = () => {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt='Icon img' />
        </header>
        <strong>
          R$ 17.400,00
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt='Icon img' />
        </header>
        <strong>
          R$ 17.400,00
        </strong>
      </div>
      <div className='highlight-total'>
        <header>
          <p>Total</p>
          <img src={Total} alt='Icon img' />
        </header>
        <strong>
          R$ 17.400,00
        </strong>
      </div>
    </Container>
  );
}

export default Summary;