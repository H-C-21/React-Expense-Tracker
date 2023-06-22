import React from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{

 function NewExpenseHandler(){
    setExp(<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={cancelHandler} />)
 }

    const initialExp = (
        <div className="new-expense__initial ">
        <div className='new-expense__actions'>
        <button type='submit' onClick={NewExpenseHandler}>Add New Expense</button>
      </div></div>
    )

    const [exp,setExp] = React.useState(initialExp);

    function cancelHandler(){
        setExp(initialExp);
    }

    function saveExpenseDataHandler(ExpenseData){
        const data = {
            ...ExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data)
        setExp(initialExp)   
    }

    return(
        <div className="new-expense">
        {exp}                 
        </div>
    )
}



export default NewExpense