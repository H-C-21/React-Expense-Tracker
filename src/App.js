import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = []



const App = () => {
  
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expenseData) =>{
    
    setExpenses((prevState)=>{
      return[expenseData,...prevState]
    })

  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
     
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
