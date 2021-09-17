import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../Services/api";

interface ITransactions {
  id: number;
  title: string;
  type: string;
  category: string;
  price: number;
  createdAt: string;
}

type TransactionInput = Omit<ITransactions, 'id' | 'createdAt'> 

interface TransactionContextData {
  transactions: ITransactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  
  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });   
        
    const { transaction } = response.data;
    
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  useEffect(() => {
    api.get('transactions').then(res => setTransactions(res.data.transactions))
  }, [])

  return(
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction() {
  const context = useContext(TransactionContext);
  return context;
}