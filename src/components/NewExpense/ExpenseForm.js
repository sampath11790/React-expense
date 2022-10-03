import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(){
    const [EnteredTittl,setEnteredTitle]=useState('')
    const [EnteredAmount,setEnteredAmount]=useState('')
    const [EnteredDate,setEnteredDate]=useState('')
    function TitleHandler(event){

        setEnteredTitle(event.target.value)
        console.log("titele changing")
    }
    function AmountHandler(event){

        setEnteredAmount(event.target.value)
          console.log("Amount changing")
      }
      function DateHandler(event){

        setEnteredDate(event.target.value)
          console.log("Date changing")
      }
//    console.log(EnteredTittl)
//    console.log(EnteredAmount)
//    console.log(EnteredDate)
   
return(
    
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={TitleHandler}/>
        </div>
        <div  className='new-expense__control'>
            <label>Amount</label>
            <input type="text" onChange={AmountHandler}/>
        </div>
        <div  className='new-expense__control'>
            <label>Date</label>
            <input type="date" onChange={DateHandler}/>
        </div>
        </div>
        <div className='new-expense__control'>
            <button >Submit</button>
        </div>
    
    </form>
   
)
}
export default ExpenseForm