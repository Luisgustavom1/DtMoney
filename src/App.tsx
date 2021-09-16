import { useState } from 'react';
import Modal from 'react-modal';

import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <GlobalStyle />

      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Nova Transação</h2>
      </Modal>

      <Dashboard />
    </>
  );
}

