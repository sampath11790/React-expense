
// import Expence from "./components/Expense/Item";
import Card from "./components/Ui/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import ExpenseFilter from "./components/Expense/ExpenseFilter";
import Expenses from "./components/Expense/Expenses";

const dummy_object =[
  {
  id:1,
  title:"car insurance",
  date:new Date(2022,9,22),
  amount:300,
  location:"Bangalore"
},
{
  id:2,
  title:"Bike insurance",
  date:new Date(2022,8,12),
  amount:100,
  location:"chennai"
},
{
  id:3,
  title:"Truck insurance",
  date:new Date(2021,9,10),
  amount:600,
  location:"Mumbai"
},
{
  id:4,
  title:"healty insurance",
  date:new Date(2021,5,10),
  amount:78.7,
  location:"bangalore"
}
]

function App() {
 
   
 
  const [currentObjectList,setNewobject]=useState(dummy_object)

const AddExpenseHandler=(newexpense)=>{
  //object.push(newexpense)
  //console.log(object)
  setNewobject(preExpenses=>{
    return[newexpense,...preExpenses]

  })
  console.log("this is app.js new expenses")
 
}
//console.log(currentObjectList)


return (
  <div>
     <NewExpense onAddExpense={AddExpenseHandler}></NewExpense>
   <Card>
  {/* <ExpenseFilter></ExpenseFilter> */}
      <h2>Let's get started!</h2>
   <Expenses items={currentObjectList}></Expenses>
{/* 
    {
      
      currentObjectList.map((item)=>{
       return  <ExpenceItem title={item.title}date={item.date}amount={item.amount}
         location={item.location} key={item.id} > </ExpenceItem>
      })
      
    }     */}
     {/* <Expence></Expence>  */}
     
    </Card>
  </div>
    
    );
 }

export default App;

