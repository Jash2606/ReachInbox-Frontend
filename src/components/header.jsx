import React from "react";
import Logo from "../assets/Login-img/MainLogo.png";
const Header = () => {
  return (
    <div className=" bg-black border-b-2 fixed text-white h-16 w-screen flex items-center border-[#25262B] justify-center">
      <div className="">
        <img src={Logo} alt="logo" className=" h-10"></img>
      </div>
    </div>
  );
};

export default Header;
