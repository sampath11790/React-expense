import './ExpenseDate.css'

const ExpenseDate=(props)=>{
    const month=props.date.toLocaleString('en-us',{month:'long'})
    const date=props.date.toLocaleString('en-us',{day:'2-digit'})
    const year=props.date.getFullYear()
   return(
    <div className='expense-date-continer'>
        <div className='expense-month'>{month}</div>
        <div className='expense-date'>{date}</div>
        <div className='expense-year'>{year}</div>
    </div>
   )
}
export default ExpenseDate