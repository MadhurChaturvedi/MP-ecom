import { useState } from "react";
import { Link } from "react-router";

const Nav = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <nav className="w-full h-auto p-4 mx-auto  flex items-center justify-around bg-neutral-50 border-1">
      <div>LUND...</div>
      <ul className="flex text-gray-800 uppercase gap-4">
        <Link
          to={"/"}
          className="hover:text-blue-800 transition-all cursor-pointer font-medium select-none"
        >
          HOME
        </Link>
        <Link
          to={"/about"}
          className="hover:text-blue-800 transition-all cursor-pointer font-medium select-none"
        >
          ABOUT
        </Link>
        <Link
          to={"/contact"}
          className="hover:text-blue-800 transition-all cursor-pointer font-medium select-none"
        >
          Contact
        </Link>
        <Link
          to={"/contact"}
          className="hover:text-blue-800 transition-all cursor-pointer font-medium select-none"
        >
          CART
        </Link>
        <button
          onClick={() => {
            btn == "Login" ? setBtn("Logout") : setBtn("Login");
          }}
        >
          {btn}
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
