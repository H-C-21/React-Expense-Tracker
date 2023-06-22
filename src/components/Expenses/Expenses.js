import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';






const Expenses = (props) => {

  const [year,setYear] = React.useState(2021)
  

  function YearChangeHandler(val) {
    setYear(val);
    
  }

  let ExpensesInfo = [] 
  let filteredExpenses = []
  for (let i=0; i<props.items.length; i++) {
    if(props.items[i].date.getFullYear() == year){
      filteredExpenses.push(props.items[i])
      ExpensesInfo.push(<ExpenseItem key={props.items[i].id} 
                   title={props.items[i].title}
                   amount={props.items[i].amount}
                   date={props.items[i].date} />)
  }}


  
  return (
    <div>
    <Card className="expenses">
    <ExpensesChart expenses={filteredExpenses}/>

    <ExpensesFilter onYearChange = {YearChangeHandler} filter={year}/>
    <ExpensesList items = {ExpensesInfo}/>
    
    </Card>
    </div>
  );
}

export default Expenses;
