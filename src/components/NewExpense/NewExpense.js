import ExpenseForm from "./ExpenseForm"
import React,{useState} from "react"
import './NewExpense.css'
function NewExpense(props){
    const [addNewvalue,setButton]=useState(false)
    const AddnewbuttonHandler =()=>{
        setButton(true)
    }
    const cancelHandler=()=>{
     //console.log('FromForm')
        setButton(false)
    }

const saveExpenseDataHandler=(enteredExpenseData)=>{
  
   
    const newexpenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    }
    //console.log(newexpenseData)
    props.onAddExpense(newexpenseData)
    setButton(false)

}

   
return(
    <div className="new-expense">
      
        {addNewvalue && <ExpenseForm 
         onSaveExpenseData={saveExpenseDataHandler} 
         onCancelEditBox={cancelHandler}></ExpenseForm>}
         {addNewvalue ===false &&  <button onClick={AddnewbuttonHandler }>Add New Form</button> }
       
      
    
    </div>
   
)
}
export default NewExpense
