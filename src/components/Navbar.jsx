import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Country", href: "/country", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // Delay closing the menu by 1 second
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 100);
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-300 px-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex float-end items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item, key) => (
                <NavLink
                  key={key}
                  to={item.href}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-main text-white"
                        : "hover:bg-main hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item, key) => (
              <NavLink
                key={key}
                to={item.href}
                onClick={handleLinkClick} // Close mobile menu with delay on link click
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-main text-white"
                      : "hover:bg-main hover:text-white"
                  } w-full`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
