import ChartBar from "./ChartBar"
import './Chart.css'
function Chart(props){
const datapointValue=props.dataPoint.map(dataponit=>dataponit.value)
// console.log(datapointValue)
const totalMax=Math.max(...datapointValue)
// console.log(totalMax)

    return (
     <div className="chart">
        { props.dataPoint.map(dataPoint=>
          <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMax} 
          label={dataPoint.label}></ChartBar>
        )
        }
      
     </div>
        
    )
}
export default Chart