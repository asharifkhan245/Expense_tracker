import React,{useState} from "react";
import Expense from "./components/Expense/Expense";
import './App.css'
import NewExpense from "./components/NewExpenses/NewExpense";
const dumyExpenses = [
  {
  id : 0,
  title :"Coffee",
  amount:300,
  date : new Date(2024 , 1 , 2),
  
},
  {
  id : 1,
  title :"feul",
  amount:5000,
  date : new Date(2024 , 1 , 24),
  
},
  {
  id : 2,
  title :"clothes",
  amount: 5200,
  date : new Date(2024 , 2 , 8),
  
}
]
function App() {
const [expenses,setexpenses] =useState(dumyExpenses)
const getExpenseDataHandler =(data) => {
setexpenses((preState)=>{
  return [data,...preState]
})
}
  return (
<>


<div className="App">
  <h1 >Expense Tracker</h1>
  <NewExpense onGetExpenseData={getExpenseDataHandler}/>
  <Expense expenses ={expenses} />
</div>
 



</>
  );
}

export default App;
