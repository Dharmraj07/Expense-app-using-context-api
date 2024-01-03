import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import ExpenseItem from './ExpenseItem';

const ExpenseForm = () => {
    const {addExpense}=useContext(ExpenseContext);
    const [newExpense,setNewExpense]=useState({
        description:'',
        price:'',
        date:'',
        transactionType:'expense',
    });

    

    const handleAddExpense=()=>{
         const {description,price,date,transactionType}=newExpense;

         if(description.trim() !== '' && price.trim() !=='' && date.trim()!==''){
            addExpense({
                id:Date.now(),
                description,
                price,
                date,
                transactionType,
            })

         }
         setNewExpense({
            description: '',
            price: '',
            date: '',
            transactionType: 'expense',
          });
    }

  return (
    <div>
      <h1>Expense tracker</h1>
      <div>
        <label>Description:</label>
        <input type="text" value={newExpense.description} onChange={(e)=> setNewExpense({...newExpense,description:e.target.value})} />
        <label >Price:</label>
        <input type="number" value={newExpense.price} onChange={(e)=> setNewExpense({...newExpense,price:e.target.value})} />
        <label>Date:</label>
        <input type="date" value={newExpense.date} onChange={(e)=> setNewExpense({...newExpense,date:e.target.value})} />
        <label > Transaction Type:</label>

        <select value={newExpense.transactionType} onChange={(e)=> setNewExpense({...newExpense,transactionType:e.target.value})}>
        <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>

        <button onClick={handleAddExpense} >Add Expense</button>


      </div>

    </div>
  )
}

export default ExpenseForm
