import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransaction } from '../../hooks/TransactionContext';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import IconClose from '../../assets/close.svg';
import deposit from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const { createTransaction } = useTransaction();
  
  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const [category, setCategory] = useState<string>('');

  async function handleNewTransaction(e: FormEvent) {
    e.preventDefault();
    
    await createTransaction({
      title,
      type,
      category,
      price
    })

    setTitle('');
    setPrice(0);
    setType('deposit');
    setCategory('');

    onRequestClose()
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
            type='button'
          >
            <img 
              src={deposit}
              alt='Icon Transaction Type Deposit'
            />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
            type='button'
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