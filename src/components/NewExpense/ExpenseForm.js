import { useState } from 'react'
import './ExpenseForm.css'
// import Test from './Test'


function ExpenseForm(props){
    const [EnteredTittl,setEnteredTitle]=useState('')
    const [EnteredAmount,setEnteredAmount]=useState('')
    const [EnteredDate,setEnteredDate]=useState('')
    function TitleHandler(event){

        setEnteredTitle(event.target.value)
       // console.log("titele changing")
    }
    function AmountHandler(event){

        setEnteredAmount(event.target.value)
         // console.log("Amount changing")
      }
      function DateHandler(event){

        setEnteredDate(event.target.value)
         // console.log("Date changing")
      }
     
      function SubmitDate(event){
        event.preventDefault();
        const expenseData={
            title:EnteredTittl,
            date:new Date(EnteredDate),
            amount:JSON.parse(EnteredAmount)
          }
   props.onSaveExpenseData(expenseData)
         //console.log(expenseData)
         setEnteredTitle('')
         setEnteredAmount('')
         setEnteredDate('')
        
       
        console.log("am submitData");
     
      }
//    console.log(EnteredTittl)
//    console.log(EnteredAmount)
//    console.log(EnteredDate)

return(
    
    <form  onSubmit={SubmitDate}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text"value={EnteredTittl}onChange={TitleHandler}/>
        </div>
        <div  className='new-expense__control'>
            <label>Amount</label>
            <input type="text" value={EnteredAmount} onChange={AmountHandler}/>
        </div>
        <div  className='new-expense__control'>
            <label>Date</label>
            <input type="date" min='2019-01-01'
            max='2022-12-31' value={EnteredDate} onChange={DateHandler}/>
        </div>
        </div>
        <div className='new-expense__control'>
            <button type='submit'>Submit</button>
        </div>
    
    </form>
   
)
}
export default ExpenseForm