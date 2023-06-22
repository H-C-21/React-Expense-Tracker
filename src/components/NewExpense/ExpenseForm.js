import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  
  const [title,setTitle] = React.useState('')
  const [amount,setAmount] = React.useState(0)
  const [date,setDate] = React.useState('')

  const titleChangeHandler = (event)=>{
      setTitle(event.target.value)
  };
  
  const amountChangeHandler = (event)=>{
    setAmount(event.target.value)
  };

  const dateChangeHandler = (event)=>{
    setDate(event.target.value)
  };

  const submitHandler = (event)=>{
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount, 
      date: new Date(date)
    }
    setTitle('')
    setDate('')
    setAmount(0)

    props.onSaveExpenseData(expenseData)

  }

  const cancelHandler = ()=>{
    props.onCancel()
  }

  return (
    <form onSubmit={submitHandler}>

      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value = {title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value = {amount} onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value = {date} onChange={dateChangeHandler}   min='2019-01-01' max='2022-12-31' />
        </div>
      </div>

      <div className = 'expense-buttons'>
      <div className='new-expense__actions'>
        <button type = 'button'  onClick={cancelHandler}>Cancel</button>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>

      </div>
    </form>
  );
};

export default ExpenseForm;
