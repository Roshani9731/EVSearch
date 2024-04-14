import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-full mt-4">
        <Image src={Logo} alt="avater" width={100} height={100} />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
