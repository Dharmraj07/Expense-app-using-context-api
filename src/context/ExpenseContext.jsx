import React, { createContext, useState }  from "react";

const ExpenseContext=createContext();

const ExpenseProvider=({children})=>{
    const [expenses,setExpenses]=useState([]);

    const addExpense=(expense)=>{
        setExpenses([...expenses,expense]);
    }

    const deleteExpense=(id)=>{
        setExpenses(expenses.filter((expense)=>expense.id !==id));

    }

    return(
        <ExpenseContext.Provider value={{expenses,setExpenses,addExpense,deleteExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export {ExpenseContext,ExpenseProvider}