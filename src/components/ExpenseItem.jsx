import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseItem = ({expense,onDelete}) => {
    const {deleteExpense}=useContext(ExpenseContext);
    const {id,description,price,date,transactionType}=expense;

  return (
    
            <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
                <p>Description : {description}</p>
                <p>Price : {price}</p>
                <p>Date : {date}</p>
                <p>TransactionType : {transactionType}</p>
                <button onClick={()=>deleteExpense(id)}> X</button>

            </div>
      
    
  )
}

export default ExpenseItem
