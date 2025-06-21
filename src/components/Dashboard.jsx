import ClientSection from "./ClientSection"
import ClientTable from "./ClientTable"
import FilterControl from "./FilterControl"
import './Dashboard.css'
function Dashboard() {
  return (
    <div className="dashboard">
     <ClientSection/>
     <FilterControl/>
     <ClientTable/>
    </div>
    
  )
}

export default Dashboard