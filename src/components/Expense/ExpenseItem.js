import React ,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'


const ExpenceItem=(props)=>{
 
//    const ExpenseDate=new Date(2022,2,22);
//    const ExpenseTitle="Car Insurance";
//    const ExpenseAmount=294.67;
//     const LocationOfExpenditure="Bangalore";
const [title,setTitle]=useState(props.title)
//console.log("update")
const ChangeTitle=()=> {
  // console.log(useState)
  setTitle("Changed Title ")
    console.log("changed")
 
}
const DeleteTitle=()=>{
  
  console.log("Deleted")

}



    return (
    <li>
    <div  className="expense-item">
       
       <ExpenseDate date={props.date}/>
       <ExpenseDetails amount={props.amount} title={title} location={props.location} />
     <button onClick={ChangeTitle}> Change Title</button>
     <button onClick={DeleteTitle}>DeleteTitle</button>

   </div>
    </li>
   
   );
     

     


}
export default ExpenceItem

