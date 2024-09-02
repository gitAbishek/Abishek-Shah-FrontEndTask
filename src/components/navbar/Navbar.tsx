import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/CustomButton";
import PATH from "../../constants/path";
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isDropdownOpen && dropdownRef.current && buttonRef.current) {
      if (
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]); // Add isDropdownOpen to dependencies to ensure the effect re-runs when this state changes

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold" : "";

  return (
    <div className="flex justify-between items-center h-20 px-5 md:px-[120px] bg-transparent">
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
        <li className="relative">
          <button
            ref={buttonRef}
            onClick={handleDropdownToggle}
            className="flex justify-center items-center"
          >
            Pages
            <IoMdArrowDropdown className="ml-1 mt-1" />
          </button>
          <div
            ref={dropdownRef}
            className={`absolute top-full right-0 mt-2 w-32 bg-[#7445FF] text-black shadow-lg rounded-lg z-10 transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <NavLink
              to={PATH.dashboard}
              className="block px-4 py-2 hover:bg-gray-100 hover:rounded-t-lg text-white hover:text-[#1C2791]"
              onClick={() => setIsDropdownOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink
              to={PATH.dashboard}
              className="block px-4 py-2 hover:bg-gray-100 text-white hover:text-[#1C2791]"
              onClick={() => setIsDropdownOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to={PATH.dashboard}
              className="block px-4 py-2 hover:bg-gray-100 hover:rounded-b-lg text-white hover:text-[#1C2791]"
              onClick={() => setIsDropdownOpen(false)}
            >
              Others
            </NavLink>
          </div>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-5">
        <NavLink to={PATH.dashboard} className="text-white">
          Sign in
        </NavLink>
        <Button
          title="Sign Up"
          styles="border rounded-md py-2 text-white text-4 font-bold text-[14px]"
        />
      </div>
      <IoMdMenu color="white" size={32} className="block md:hidden h-[32px]" />
    </div>
  );
};

export default Navbar;
