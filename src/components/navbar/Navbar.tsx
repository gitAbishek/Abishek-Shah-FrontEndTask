import { NavLink } from "react-router-dom";
import Button from "../button/CustomButton";
import PATH from "../../constants/path";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold" : "";

  return (
    <div className="flex justify-between items-center h-20 px-5  md:px-[120px] bg-transparent">
      <div className="font-bold text-[32px] text-white">Saasly</div>
      <ul className="hidden md:flex justify-center items-center gap-5 text-white">
        <li>
          <NavLink to={PATH.dashboard} className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={getNavLinkClass}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={getNavLinkClass}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className={getNavLinkClass}>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages" className={getNavLinkClass}>
            Pages
          </NavLink>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-5">
        <NavLink to="/signin" className="text-white">
          Sign in
        </NavLink>
        <Button
          title="Sign Up"
          styles="border rounded-md py-2 text-white text-4 font-bold text-[14px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
