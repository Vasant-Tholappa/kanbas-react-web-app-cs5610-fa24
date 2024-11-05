import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  // const { pathname } = useLocation();
  return (

    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
          <NavLink 
            id="wd-account-signin-link" 
            to={`/Kanbas/Account/Signin`} 
            className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : ''}`}
          >
            Signin
          </NavLink>
          <NavLink 
            id="wd-account-signup-link" 
            to={`/Kanbas/Account/Signup`}
            className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : ''}`}
          >
            Signup
          </NavLink>
          <NavLink 
            id="wd-account-profile-link"
            to={`/Kanbas/Account/Profile`}
            className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : ''}`}
          >
            Profile
          </NavLink>
      
    </div>
);}
