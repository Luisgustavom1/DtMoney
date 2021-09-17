import { useState } from 'react';

import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header/Header";
import NewTransactionModal from './Components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from './hooks/TransactionContext';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <GlobalStyle />

      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </TransactionProvider>
  );
}

