import './ClientSection.css';
import { TbUserHexagon } from "react-icons/tb";
import { TbDots } from "react-icons/tb";

function ClientSection() {
  return (
    <div className="client-section">
      <div className="left-section">
        <div className="user-icon">
          <TbUserHexagon className="icon" />
        </div>
        <h3>Clients</h3>
      </div>

      <div className="right-section">
        <select name="branch" id="branch">
          <option value="kathmandu">kathmandu(branch)</option>
          <option value="pokhara">pokhara(branch)</option>
        </select>

        <div className="dot-icon">
          <TbDots className="icon" />
        </div>
      </div>
    </div>
  );
}

export default ClientSection;
