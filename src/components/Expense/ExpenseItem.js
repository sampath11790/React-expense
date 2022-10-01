
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';



const ExpenceItem=(props)=>{
//    const ExpenseDate=new Date(2022,2,22);
//    const ExpenseTitle="Car Insurance";
//    const ExpenseAmount=294.67;
//     const LocationOfExpenditure="Bangalore";
const ChangeTitle=()=>{
    console.log("changed")
 
}
const DeleteTitle=()=>{
  console.log("Deleted")

}


    return (
    
    <div  className="expense-item">
       <ExpenseDate date={props.date}/>
       <ExpenseDetails amount={props.amount} title={props.title} location={props.location} />
     <button onClick={ChangeTitle}> Change Title</button>
     <button onClick={DeleteTitle}>DeleteTitle</button>

   </div>
   );
     

     


}
export default ExpenceItem

