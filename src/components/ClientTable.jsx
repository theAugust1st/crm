import { useState } from "react"
import TableControl from "./TableControl"
import Table from "./Table"
function ClientTable() {
  const [showDropDown,setShowDropDown] = useState(false)

  return (
    <div style={{ width:"100%",height:"100vh", backgroundColor:"white", marginLeft:"4px" ,padding:"0 0 12px 24px"}}>
      <TableControl setShowDropDown={setShowDropDown}/>
      <Table showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
    </div>
  )
}

export default ClientTable