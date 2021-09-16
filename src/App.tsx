import { useState } from 'react';

import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header/Header";
import NewTransactionModal from './Components/NewTransactionModal';
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

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </>
  );
}

