"use client";
import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/constants/data"; // Adjust the path as necessary
import Header from "./Header";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderProductsDropdown = () => {
    return (
      <div className="md:absolute mt-4 min-w-[26rem] bg-white md:shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {navigation.products.categories.map((category) => (
            <div key={category.title} className="md:p-4">
              <h3 className="font-semibold text-black p-2">{category.title}</h3>
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id} className="flex gap-8">
                    <Link
                      className="font-normal p-2 hover:text-white hover:bg-black md:w-full block"
                      onClick={closeMobileMenu}
                      href={subcategory.url}
                    >
                      {subcategory.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCompanyDropdown = () => {
    return (
      <div className="md:absolute mt-4 min-w-[15rem] text-black bg-white md:shadow-lg transition-all duration-300">
        <div className="md:p-4">
          <ul>
            {navigation.company.categories.map((category) => (
              <li key={category.title} className="flex gap-8">
                <Link
                  className="font-normal p-2 hover:text-white hover:bg-black md:w-full block"
                  onClick={closeMobileMenu}
                  href={category.url}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto py-4 relative">
      <Header />
      <nav className="container mx-auto">
        <div className="flex justify-between items-center absolute top-8 right-4 md:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className={`flex flex-col md:flex-row justify-start relative md:gap-12 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="p-4 uppercase font-bold">
            <Link onClick={closeMobileMenu} href={navigation.home.url}>
              {navigation.home.title}
            </Link>
          </li>
          <li
            className="relative p-4 font-bold cursor-pointer"
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <div className="flex items-center uppercase">
              {navigation.products.title}
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isProductsDropdownOpen && renderProductsDropdown()}
          </li>
          <li
            className="relative p-4 font-bold cursor-pointer"
            onMouseEnter={toggleCompanyDropdown}
            onMouseLeave={toggleCompanyDropdown}
          >
            <div className="flex items-center uppercase">
              {navigation.company.title}
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  isCompanyDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isCompanyDropdownOpen && renderCompanyDropdown()}
          </li>
          <li className="p-4 uppercase font-bold">
            <Link onClick={closeMobileMenu} href={navigation.contacts.url}>
              {navigation.contacts.title}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
