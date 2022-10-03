import './ExpenseForm.css'
function ExpenseForm(){
    function InputHandler(event){
       console.log(event.target.value)
        // console.log("titele changing")
    }
return(
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={InputHandler}/>
        </div>
        <div  className='new-expense__control'>
            <label>Amount</label>
            <input type="text" onChange={InputHandler}/>
        </div>
        <div  className='new-expense__control'>
            <label>Date</label>
            <input type="date" onChange={InputHandler}/>
        </div>
        </div>
        <div className='new-expense__control'>
            <button>Submit</button>
        </div>
    
    </form>
   
)
}
export default ExpenseForm