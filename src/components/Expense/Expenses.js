import ExpenceItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import React ,{useState} from "react"
function Expenses(props){

const [filterYear,SetYear]=useState('all')



    function FilterChangeHandler(props){
        SetYear(props)
        // console.log(props)
        // console.log("FilterChangeHandler")
    }
    const FilterdArray=props.items.filter(expense=>{
      if(filterYear==='all')return expense
    return expense.date.getFullYear().toString()===filterYear 
    })

    console.log(FilterdArray)
  
   //console.log(props.items[0].title)
    return(
     <div>
        <ExpenseFilter onChangeFilter={FilterChangeHandler}></ExpenseFilter>
    {
     FilterdArray.map((item)=>
      
        <ExpenceItem title={item.title}
        date={item.date}
        amount={item.amount}
        location={item.location} 
        key={item.id}> </ExpenceItem>
  )
   }
      
     </div>
    )
}
export default Expenses