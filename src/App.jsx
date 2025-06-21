import Header from "./components/Header"
import CRM from "./components/CRM"
import Dashboard from "./components/Dashboard"
import './App.css'
function App() {
  return(
    <div className='app'>
      <Header></Header>
      <div className="main-layout">
      <CRM/>
      <Dashboard/>
      </div>
    </div>
  )
}

export default App
