import { useState } from "react";
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
import NewExpense from "./Components/NewExpense";
import ExpensesFilter from "./Components/ExpensesFilter";

function App() {
  
  const [expenses, setExpenses] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const getExpenses = async()=>{
    setIsLoading(true);


    try{
    
    const response = await fetch("https://mocki.io/v1/fac63d98-b88c-4740-ac15-11d88648033e")
    const data = await response.json();
    console.log(data)

    const fetchedExpenses = data.map((item)=>{
      return{
        ...item,
        date: new Date(item.date),
      }
    })

    setExpenses(fetchedExpenses);
    setIsLoading(false);
  }catch(error){
    console.log("somthing wrong !");
  }
  };
  const [selectedYear, setSlectedYear] = useState("");
  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    console.log(expenses);
    const updatedExpenses = [...expenses, newExpense];
    console.log(updatedExpenses);
    setExpenses(updatedExpenses);
  };
  const changeFilterHandler = (selectedYear) => {
    console.log(selectedYear);
    setSlectedYear(selectedYear);
  };

  var filteredList = expenses;
  if (selectedYear != "") {
    filteredList = expenses.filter((expense) => {
      return expense.date.getFullYear() == selectedYear;
    });
  }

  var expensesList = filteredList.map((item) => (
    <ExpenseItem key={item.id} expense={item} />
  ));

  const emptyList = (
    <h2 className="expenses-list__fallback">No expenses Found.</h2>
  );
  const loadingList = (
    <h2 className="expenses-list__fallback">Loading...</h2>
  );

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="card expenses">
        <ExpensesFilter onChangeFilter={changeFilterHandler} />
        {filteredList.length === 0 && !isLoading && emptyList}
        {!isLoading && expensesList}
        {isLoading && loadingList}
        
        <button onClick={getExpenses}>get expenses</button>
      </div>
    </div>
  );
}

export default App;
