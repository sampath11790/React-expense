import ExpenceItem from "./components/ExpenseItem";
import Expence from "./components/Item";
function App() {
   const object=[
    {
    id:1,
    title:"car insurance",
    date:new Date(2022,9,22),
    amount:300,
    location:"Bangalore"
  },
  {
    id:2,
    title:"Bike insurance",
    date:new Date(2022,8,12),
    amount:100,
    location:"chennai"
  },
  {
    id:3,
    title:"Truck insurance",
    date:new Date(2021,9,10),
    amount:600,
    location:"Mumbai"
  },
  {
    id:4,
    title:"healty insurance",
    date:new Date(2021,5,10),
    amount:78.7,
    location:"bangalore"
  }
  ]
return (
    <div>
      <h2>Let's get started!</h2>
      {
      
       object.map((item)=>{
       
        return  <ExpenceItem 
         title={item.title} 
         date={item.date} 
         amount={item.amount}
         location={item.location}>
        </ExpenceItem>
      })
      
    }    
     <Expence></Expence> 
     
    </div>
    );
 }

export default App;
