
import './ExpenseItem.css'
function ExpenceItem(props){
//    const ExpenseDate=new Date(2022,2,22);
//    const ExpenseTitle="Car Insurance";
//    const ExpenseAmount=294.67;
//     const LocationOfExpenditure="Bangalore";

    return (
    <div className="expense-item">
       <div>{props.date.toISOString()}</div>
       <div className='expense-item__description'>
        <h2>{props.title}</h2>
       <div className='Location-Expenditure'>
       <h2>{props.location}</h2>
       </div>
      <div className='expense-item__price'>{"$"+props.amount}</div>
       </div>
     </div>);
}
export default ExpenceItem

