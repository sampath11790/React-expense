import React,{useState} from 'react';
import './ExpenseDetails.css'
const ExpenseDetails=(props)=>{
    const title=props.title;
    const location=props.location
    const [amount,setAmount]=useState( props.amount)
    
   function ChangeAmount(){
    setAmount(100)
   }
    return(
       
       <div className='expense-item__description'>
        <h2>{title}</h2>
        <button onClick={ChangeAmount}>change amount</button>
        <div className='Location-Expenditure'>
        <h2>{location}</h2>
         </div>
        <div className='expense-item__price'>{"$"+amount}</div>
         </div>
       
       
        
    
   )

}

export default ExpenseDetails