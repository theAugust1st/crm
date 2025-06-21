import './Header.css';
import { TbGridDots } from "react-icons/tb";
import { BsPlusCircleDotted } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";
import profile from '../assets/profile.png'
function Header() {
  return (
    <header className="app-header">
      <div className="left-title">
          <TbGridDots className='icon'/>
        <h2 className='project-title'>Test Project</h2>
      </div>
      <div className="right-icons">
        <ul>
          <li className="add">
            <BsPlusCircleDotted  className='icon'/>
          </li>
          <li className="notification">
            <IoMdNotificationsOutline  className='icon'/>
          </li>
          <li className="mail">
            <GoMail  className='icon'/>
          </li>
          <li className="setting">
            <LuSettings  className='icon'/>
          </li>

          <li className="bar"></li>

          <li className="ui-mode">
            <IoMoonOutline className='icon' />
          </li>
<li className="profile-group">
  <div className="profile-wrapper">
    <img src={profile} className="profile-avatar" alt="user-avatar" />
    <RiArrowDownSLine className="icon dropdown-icon" />
  </div>
</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
