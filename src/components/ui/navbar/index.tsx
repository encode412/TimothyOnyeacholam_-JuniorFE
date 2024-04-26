import React, { useEffect, useState } from "react";
import {Button} from '../'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // initialize togglemenu state to keep track if mobile menu is open
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      <div className={`flex z-[99] items-center px-6 md:px-12 lg:px-36 bg justify-between md:h-14 h-12 lg:h-20 fixed md:top-0 top-0 bg-none w-full transition-all ease-out duration-300 xl:gap-0 md:gap-3 ${scrolling ? 'bg-black transition-all ease text-white' : 'text-white'}`}>
        <Link to="/">
          <span>spaceT</span>
        </Link>
        <div className="md:flex hidden justify-center items-center md:space-x-10 lg:space-x-20 text-lightgray md:text-xs lg:text-sm uppercase font-normal">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/capsules">Capsules</NavLink>
          <NavLink to="/">Join SpaceT</NavLink>
        </div>

        <div className="md:flex hidden items-center space-x-5 lg:space-x-10">
         
          
        </div>

        <div className="md:hidden block cursor-pointer">
          <img
            src={'/home/hamburger.png'}
            alt="hamburger"
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
        <div className="fixed px-6 top-0 left-0 w-full bg-primary transition-all duration-150 flex flex-col z-50 pt-6 items-center animate-slideBottom overflow-hidden h-full">
          <span
            className="text-4xl text-black absolute top-5 right-6 cursor-pointer"
            
            onClick={() => setToggleMenu(false)}
          >X</span>
          <ul className="list-none w-full">
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                  Marketplace
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/capsules"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                 capsules
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                  about us
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                  contact us
                </Link>
              </div>
            </li>
          </ul>
          <div className="flex flex-col items-center space-y-6 my-6 w-full">
            <Link to="/" className="w-[100%] mx-auto">
              <Button
                className="hover:scale-95 font-extrabold uppercase text-primary w-full !text-base flex justify-center items-center"
                children="Sign up"
                padding={"15px 30px"}
              />
            </Link>
            <Link to="/" className="w-[100%] mx-auto">
              <Button
                className="hover:scale-95 font-extrabold uppercase text-primary w-full !text-base flex justify-center items-center"
                backgroundColor={"#000"}
                children="Login"
                padding={"15px 30px"}
              />
            </Link>
          </div>

        </div>
      )}

        </div>
      </div>
     
    </>
  );
};

export default Navbar;
