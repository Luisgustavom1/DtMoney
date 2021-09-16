import React from 'react';
import Modal from 'react-modal';

import { Container } from './styles';

import IconClose from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
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
      <Container>
        <h2>Cadastrar Nova Transação</h2>

        <input 
          placeholder='Titulo'
        />
        <input 
          placeholder='Preço'
        />
        <input 
          placeholder='Categoria'
        />
        <button type='submit'>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;