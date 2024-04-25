import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaUsers, FaUsersGear, FaToolbox } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
import { useAuth } from "../../../../utils/auth.js";

function SideBar({ className }) {
  const auth = useAuth();
  const logout = () => {
    auth.logout();
  };
  return (
    <section className={className}>
      <ul className="sidebar-title">
        <li className="sidebar-title-items">Sectional Titles</li>
        <li className="sidebar-title-items">&</li>
        <li className="sidebar-title-items">Property Management</li>
      </ul>

      <ul className="sidebar-links-container">
        <li className="sidebar-link-li">
          <NavLink className="sidebar-link">
            <span className="icon-text">
              <FaBars size="1.5em" />
              <p className="item-padding">Dashboard</p>
            </span>
          </NavLink>
        </li>
        <li className="sidebar-link-li">
          <NavLink className="sidebar-link">
            <span className="icon-text">
              <FaUsers size="1.5em" />
              <p className="item-padding">Staff</p>
            </span>
          </NavLink>
        </li>
        <li className="sidebar-link-li">
          <NavLink className="sidebar-link">
            <span className="icon-text">
              <FaUsers size="1.5em" />
              <p className="item-padding">Residents</p>
            </span>
          </NavLink>
        </li>
        <li className="sidebar-link-li">
          <NavLink className="sidebar-link">
            <span className="icon-text">
              <FaUsersGear size="1.5em" />
              <p className="item-padding">Admins</p>
            </span>
          </NavLink>
        </li>
        <li className="sidebar-link-li">
          <NavLink className="sidebar-link">
            <span className="icon-text">
              <FaToolbox size="1.5em" />
              <p className="item-padding">Maintenance</p>
            </span>
          </NavLink>
        </li>
        <li className="sidebar-link-li">
          <NavLink className="sidebar-link">
            <span className="icon-text">
              <GiTakeMyMoney size="1.5em" />
              <p className="item-padding">Fines</p>
            </span>
          </NavLink>
        </li>
        <li className="sidebar-link-li">
          <NavLink className="sidebar-link">
            <span className="icon-text">
              <TbReportSearch size="1.5em" />
              <p className="item-padding">Reports</p>
            </span>
          </NavLink>
        </li>
      </ul>
      <footer className="sidebar-footer">
        <ul className="sidebar-footer-li-container">
          <li className="sidebar-link-li">
            <NavLink className="sidebar-link">
              <span className="icon-text">
                <img
                  className="sidebar-footer-profile"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                />
                <p className="item-padding">Blessing Kodze</p>
              </span>
            </NavLink>
          </li>
          <li className="sidebar-link-li">
            <NavLink className="sidebar-link" to="/">
              <span className="icon-text">
                <PiSignOutBold size="1.5em" />
                <p className="item-padding" onClick={logout}>
                  Sign Out
                </p>
              </span>
            </NavLink>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default SideBar;
