"use client";
import Image from "next/image";
import Link from "next/link";
import Menubutton from "../menubutton/menubutton";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesSubmenuOpen, setIsServicesSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesSubmenuOpen(false); // Close submenu when mobile menu closes
  };

  const toggleServicesSubmenu = () => {
    setIsServicesSubmenuOpen(!isServicesSubmenuOpen);
  };

  return (
    <>
      <section className="header max-w-[100%] mx-auto border-b-[#4455671c]" style={{
        boxShadow: "0 1px 37px 1px #eae7e5",
      }}>
        <div className="container mx-auto max-w-[1300px] pt-[23px] pb-[23px] md:pl-[20px] pl-[15px] md:pr-[20px] pr-[15px] h-[86px] flex items-center">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="Logo">
              <Image src="/Logo.png" alt="Logo" width={234} height={25} />
            </div>

            {/* Desktop Menu - Hidden on mobile */}
            <div className="menu desktop-menu">
              <ul className="flex gap-[12px]">
                <li className="py-[20px] px-[12px] flex justify-center items-center">
                  <Link className="menu-font-style" href="/">
                    Home
                  </Link>
                </li>
                <li className="py-[20px] px-[12px] flex justify-center items-center">
                  <Link className="menu-font-style" href="/aboutus">
                    About Us
                  </Link>
                </li>

                {/* Services with Dropdown */}
                <li className="py-[20px] px-[12px] flex justify-center items-center relative group">
                  <Link
                    className="menu-font-style flex justify-between items-center gap-[5px]"
                    href="/"
                  >
                    Services
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </Link>

                  {/* Submenu */}
                  <div className="submenu absolute left-1/2 top-[50px] -translate-x-1/2 w-[800px] hidden group-hover:block bg-white shadow-lg p-4 z-50">
                    <div className="flex gap-6 flex-col ">
                      {/* Submenu Header Item */}
                      <Link
                        href="/website-development-service"
                        className="w-full pt-[20px] pb-[16px] pr-[16px] flex items-center hover:bg-[#fff3e0]"
                      >
                        <Image
                          src="/menuimage.png"
                          alt="WordPress"
                          width={51}
                          height={51}
                        />
                        <div className="ml-[20px]">
                          <div className="text-[16px] font-[600] text-[#283338] raleway">
                            Website Development Services
                          </div>
                          <div className="text-[#070707] text-[14px] font-[400] raleway">
                            User-Centric Website Development
                          </div>
                        </div>
                      </Link>

                      {/* Services Columns */}
                      <div className="w-full flex justify-between">
                        {/* WordPress Services */}
                        <ul className="raleway menu-list">
                          <li>
                            <Link
                              href="/"
                              className="flex head items-center text-[#ed8104] font-[600] tracking-[1px]"
                            >
                              <Image
                                className="mr-[5px]"
                                src="/wordpress.svg"
                                alt=""
                                height={40}
                                width={40}
                              />
                              WordPress Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/wordpress-development">WordPress Development</Link>
                          </li>
                          <li>
                            <Link href="/wordpress-maintenance">WordPress Maintenance</Link>
                          </li>
                          <li>
                            <Link href="/wordpress-support">WordPress Support</Link>
                          </li>
                          <li>
                            <Link href="/wordpress-design">WordPress Design</Link>
                          </li>
                        </ul>

                        {/* Shopify Services */}
                        <ul className="raleway menu-list">
                          <li>
                            <Link
                              href="/"
                              className="flex head items-center text-[#ed8104] font-[600] tracking-[1px]"
                            >
                              <Image
                                className="mr-[5px]"
                                src="/Shopify.png"
                                alt=""
                                height={40}
                                width={40}
                              />
                              Shopify Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/shopify-development">Shopify Development</Link>
                          </li>
                          <li>
                            <Link href="/shopify-maintenance">Shopify Maintenance</Link>
                          </li>
                          <li>
                            <Link href="/shopify-support">Shopify Support</Link>
                          </li>
                          <li>
                            <Link href="/shopify-design">Shopify Design</Link>
                          </li>
                        </ul>

                        {/* Webflow Services */}
                        <ul className="raleway menu-list">
                          <li>
                            <Link
                              href="/"
                              className="flex head items-center text-[#ed8104] font-[600] tracking-[1px]"
                            >
                              <Image
                                className="mr-[5px]"
                                src="/webflow.png"
                                alt=""
                                height={40}
                                width={40}
                              />
                              Webflow Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/webflow-development">Webflow Development</Link>
                          </li>
                          <li>
                            <Link href="/webflow-maintenance">Webflow Maintenance</Link>
                          </li>
                          <li>
                            <Link href="/webflow-support">Webflow Support</Link>
                          </li>
                          <li>
                            <Link href="/webflow-design">Webflow Design</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="py-[20px] px-[12px] flex justify-center items-center">
                  <Link className="menu-font-style" href="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="py-[20px] px-[12px] flex justify-center items-center">
                  <Link className="menu-font-style" href="/community">
                    Community
                  </Link>
                </li>
                <li className="py-[20px] px-[12px] flex justify-center items-center">
                  <Link className="menu-font-style" href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="py-[20px] px-[12px] flex justify-center items-center">
                  <Link className="menu-font-style" href="/resources">
                    Resources
                  </Link>
                </li>

                {/* Menu Button */}
                <li className="mr-[13px] flex justify-center items-center">
                  <Menubutton />
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button - Visible only on mobile */}
            <div className="mobile-menu-button">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-black focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Mobile Menu Content */}
          <div className="fixed top-0 left-0 w-full h-full bg-white overflow-y-auto">
            {/* Header Section */}
            <div className="border-b border-orange-500">
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center">
                   <div className="Logo">
              <Image src="/Logo.png" alt="Logo" width={234} height={25} />
            </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-black focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className="menu-font-style block py-2"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/aboutus" 
                    className="menu-font-style block py-2"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>
                </li>
                
                {/* Services Section */}
                <li>
                  <div 
                    className="flex items-center justify-between menu-font-style py-2 cursor-pointer"
                    onClick={toggleServicesSubmenu}
                  >
                    <span>Services</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${isServicesSubmenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  
                  {/* Services List */}
                  {isServicesSubmenuOpen && (
                    <div className="mt-4 space-y-4 flex gap-6 flex-col">
                    {/* Website Development - Full width first row */}
                    <Link href="/website-development-service">
                    <div className="w-full flex items-start space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-black">Website Development</div>
                        <div className="text-gray-500 text-sm">Responsive Web Design</div>
                      </div>
                    </div>
</Link>
                    {/* Remaining 3 services in one row on tablet, stacked on mobile */}
                    <div className="md:flex md:flex-row md:space-x-4 md:space-y-0 flex flex-col space-y-4">
                      {/* WordPress Services */}
                      <div className="md:w-1/3">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">     <Image
                                className="mr-[5px]"
                                src="/wordpress.svg"
                                alt=""
                                height={40}
                                width={40}
                              /></span>
                          </div>
                          <span className="text-orange-500 font-semibold">WordPress Services</span>
                        </div>
                        <div className="ml-13 space-y-1">
                          <Link href="/wordpress-development" className="text-gray-500 text-sm md:inline block">WordPress Development</Link>
                          <Link href="/wordpress-maintenance" className="text-gray-500 text-sm md:inline block">WordPress Maintenance</Link>
                          <Link href="/wordpress-support" className="text-gray-500 text-sm md:inline block">WordPress Support</Link>
                          <Link href="/wordpress-design" className="text-gray-500 text-sm md:inline block">WordPress Design</Link>
                        </div>
                      </div>

                      {/* Shopify Services */}
                      <div className="md:w-1/3">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">     <Image
                                className="mr-[5px]"
                                src="/shopify.png"
                                alt=""
                                height={40}
                                width={40}
                              /></span>
                          </div>
                          <span className="text-orange-500 font-semibold">Shopify Services</span>
                        </div>
                        <div className="ml-13 space-y-1">
                          <Link href="/shopify-development" className="text-gray-500 text-sm md:inline block">Shopify Development</Link>
                          <Link href="/shopify-maintenance" className="text-gray-500 text-sm md:inline block">Shopify Maintenance</Link>
                          <Link href="/shopify-support" className="text-gray-500 text-sm md:inline block">Shopify Support</Link>
                          <Link href="/shopify-design" className="text-gray-500 text-sm md:inline block">Shopify Design</Link>
                        </div>
                      </div>

                      {/* Webflow Services */}
                      <div className="md:w-1/3">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="">     <Image
                                className="mr-[5px]"
                                src="/webflow.png"
                                alt=""
                                height={40}
                                width={40}
                              /></span>
                          </div>
                          <span className="text-orange-500 font-semibold">Webflow Services</span>
                        </div>
                        <div className="ml-13 space-y-1">
                           <Link href="/webflow-development" className="text-gray-500 text-sm md:inline block">Webflow Development</Link>
                           <Link href="/webflow-maintenance" className="text-gray-500 text-sm md:inline block">Webflow Maintenance</Link>
                           <Link href="/webflow-support" className="text-gray-500 text-sm md:inline block">Webflow Support</Link>
                           <Link href="/webflow-design" className="text-gray-500 text-sm md:inline block">Webflow Design</Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  )}
                </li>

                <li>
                  <Link 
                    href="/portfolio" 
                    className="menu-font-style block py-2"
                    onClick={closeMobileMenu}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/community" 
                    className="menu-font-style block py-2"
                    onClick={closeMobileMenu}
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blogs" 
                    className="menu-font-style block py-2"
                    onClick={closeMobileMenu}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resources" 
                    className="menu-font-style block py-2"
                    onClick={closeMobileMenu}
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
