import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const {expenses}=useContext(ExpenseContext);

  return (
    <div>
        {expenses.map((expense)=>(
           <ExpenseItem key={expense.id} expense={expense} />
        ))}
      
    </div>
  )
}

export default ExpenseList
