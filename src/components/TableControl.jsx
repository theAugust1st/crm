import { IoChevronDown } from "react-icons/io5";
import "./TableControl.css";
import { useState } from "react";
function TableControl({setShowDropDown}) {
  const [isActive, setIsActive] = useState("clients");
  function handleShowDropDown(){
    setShowDropDown(prev=>!prev)
  }
  return (
    <div className="table-control">
      <div className="right-tabs" onClick={handleShowDropDown}>
        <button className="btn new-client-btn">New Client</button>
        <IoChevronDown className="new-client-dropdown" />
      </div>
      <div className="left-tabs">
        <button className={`btn btn-tabs prospects ${isActive === 'prospects'?'active':''}`} onClick={()=>setIsActive('prospects')}>Prospects(15)</button>
        <button className={`btn btn-tabs clients ${isActive === 'clients'?'active':''}`} onClick={()=>setIsActive('clients')}>
          Clients(10)
        </button>
        <button className={`btn btn-tabs archive ${isActive === 'archived'? 'active':""}`} onClick={()=>setIsActive('archived')}>Archived(0)</button>
      </div>
    </div>
  );
}

export default TableControl;
