
import './ExpenseItem.css'
function ExpenceItem(){
   const ExpenseDate=new Date(2022,2,22);
   const ExpenseTitle="Car Insurance";
   const ExpenseAmount=294.67;
    const LocationOfExpenditure="Bangalore";

    return (
    <div className="expense-item">
       <div>{ExpenseDate.toISOString()}</div>
       <div className='expense-item__description'>
        <h2>{ExpenseTitle}</h2>
       <div className='Location-Expenditure'>
       <h2>{LocationOfExpenditure}</h2>
       </div>
     <div className='expense-item__price'>{"$"+ExpenseAmount}</div>
       </div>
     </div>);
}
export default ExpenceItem

