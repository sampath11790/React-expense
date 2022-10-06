import ExpenceItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"

function Expenses(props){
    function FilterChangeHandler(props){
     console.log(props)
        console.log("FilterChangeHandler")
    }
//console.log(props.items[0].title)
    return(
     <div>
        <ExpenseFilter onChangeFilter={FilterChangeHandler}></ExpenseFilter>
       {
     props.items.map((item)=>{
      
   return <ExpenceItem title={item.title}date={item.date}amount={item.amount}
     location={item.location} key={item.id} > </ExpenceItem>
  })
       }
      
     </div>
    )
}
export default Expenses