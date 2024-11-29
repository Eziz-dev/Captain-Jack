import { useState } from "react";

type HamburgerProps = {
  className: string;
}

const HamburgerDropdownMenu = (): HamburgerProps => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="flex flex-col space-y-1 w-8 h-8 items-center justify-center focus:outline-none"
        onClick={toggleMenu}
      >
        <div
          className={`h-1 w-full bg-gray-800 rounded transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-gray-800 rounded transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-gray-800 rounded transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              About
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Services
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerDropdownMenu;
