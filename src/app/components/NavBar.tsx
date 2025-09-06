import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="flex justify-between items-center flex-1">
        <Image src={"/group.svg"} alt="group" height={15} width={16} />
        <Image
          src={"/audiophile.svg"}
          alt="logo"
          height={90}
          width={120}
        ></Image>
        <Image src={"/cart.svg"} alt="cart" height={24} width={24} />
      </div>
    </nav>
  );
};

export default NavBar;
