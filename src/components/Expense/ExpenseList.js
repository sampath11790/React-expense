import './ExpenseList.css'
import ExpenceItem from './ExpenseItem';


function ExpenseList(props){

 
   let singleElement;
   if(props.items.length===1){
    singleElement=<h1 className='expenses-list__fallback'>"Only single Expense here. Please add more..."</h1>
   }
   if(props.items.length===0){
   return  <h1 className='expenses-list__fallback'  >NO data</h1>
   }


    return (
       
        <ul className='expenses-list'>
        {
            props.items.map((item)=>
           <ExpenceItem title={item.title}
            date={item.date}
            amount={item.amount}
            location={item.location} 
            key={item.id}> </ExpenceItem>)
           }
            {singleElement}
           </ul>

    )
}
export default ExpenseList