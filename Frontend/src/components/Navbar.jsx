import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuicon, setmenuicon] = useState(false);
  console.log(menuicon);
  return (
    <>
      <div className="w-full  bg-black min-h-24 grid-cols-12 grid">
        <div className="LOGO-container xl:col-span-3 col-span-10 p-4 flex items-center">
          <h1 className="text-3xl sm:text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
            ChatBuddy
          </h1>
        </div>
        <div className="col-span-6 hidden     xl:flex justify-center items-center gap-10 text-xl ">
          {["Home", "How It Works", "Features", "Pricing", "FAQ"].map(
            (item, index) => (
              <Link
                className="text-[#fff] hover:text-pink-400 cursor-pointer"
                id={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
              >
                {item}
              </Link>
            )
          )}
        </div>
        <div className="xl:col-span-3 hidden  xl:flex justify-center items-center gap-4">
          <Link to="/signup">
          <button className="cursor-pointer ml-7 bg-transparent border-2 border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-white transition duration-300 shadow-md">
            SignUp
          </button>
          </Link>
        </div>

        <div className="col-span-2 flex justify-center items-center   xl:hidden">
          <HiBars3
            className="text-[#fff] text-2xl cursor-grab "
            onClick={() => setmenuicon(!menuicon)}
          ></HiBars3>
        </div>
        {menuicon && (
          <div className="w-screen h-screen bg-zinc-600 flex justify-self-start pt-10 items-center flex-col m-auto gap-2 transition-all duration-300 ease-out opacity-100 scale-100">
            {["Home", "How It Works", "Features", "Pricing", "FAQ"].map(
              (item, index) => (
                <Link
                  className="text-[#fff] hover:text-pink-400 cursor-pointer text-[1rem] sm:text-2xl lg:text-3xl transition-all duration-300 ease-in-out"
                  id={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                >
                  {item}
                </Link>
              )
            )}

            <button className="cursor-pointer bg-transparent border-2 border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md">
              <Link to="/signup" >SignUp</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
