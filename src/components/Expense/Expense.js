import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';

import './Expense.css'

const Expense = (props) => {
  const [filteredYear, setFilteredYear] =useState (2024)
  const FilteredChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  const filteredByYear =props.expenses.filter(expense =>{
    return(expense.date.getFullYear().toString() === filteredYear)
  })
  return (
    <>
      <Card className="expenses">
<ExpenseFilter selected={filteredYear} onFilteredChangeYear={FilteredChangeHandler}/>

{filteredByYear.length === 0 ?  <h3>No Expense Found</h3>  : 
filteredByYear.map((expense) =>{
  return ( <ExpenseItem
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />)
 })

}
      </Card>
    </>
  );
}

export default Expense