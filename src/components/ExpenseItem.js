
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


function ExpenceItem(props){
//    const ExpenseDate=new Date(2022,2,22);
//    const ExpenseTitle="Car Insurance";
//    const ExpenseAmount=294.67;
//     const LocationOfExpenditure="Bangalore";

    return (
    <div className="expense-item">
       <ExpenseDate date={props.date}/>
       <ExpenseDetails amount={props.amount} title={props.title} location={props.location} />
   </div>);
     

     


}
export default ExpenceItem

