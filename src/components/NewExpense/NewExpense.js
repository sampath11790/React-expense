import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
function NewExpense(props){
const saveExpenseDataHandler=(enteredExpenseData)=>{
    const newexpenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    }
    //console.log(newexpenseData)
    props.onAddExpense(newexpenseData)

}
   
return(
    <div className="new-expense">
     <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
   
)
}
export default NewExpense
