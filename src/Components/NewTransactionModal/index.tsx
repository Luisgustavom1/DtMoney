import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

import IconClose from '../../assets/close.svg';
import deposit from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import api from '../../Services/api';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [type, setType] = useState<'deposit' | 'withDraw'>('deposit');
  const [category, setCategory] = useState<string>();

  function handleNewTransaction(e: FormEvent) {
    e.preventDefault();
    
    const data = {
      title,
      price,
      category,
      type
    };

    api.post('/transactions', data);    
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    > 
      <button
        className='react-modal-close'
        type='button'
        onClick={onRequestClose}
      >
        <img src={IconClose} alt='Icon sair'/>
      </button>
      <Container           
        onSubmit={handleNewTransaction}  
      >
        <h2>Cadastrar Nova Transação</h2>

        <input 
          placeholder='Titulo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          placeholder='Preço'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img 
              src={deposit}
              alt='Icon Transaction Type Deposit'
            />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            onClick={() => setType('withDraw')}
            isActive={type === 'withDraw'}
            activeColor='red'
          >
            <img 
              src={outcome}
              alt='Icon Transaction Type Outcome'
            />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder='Categoria'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type='submit'>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;