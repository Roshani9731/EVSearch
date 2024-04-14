import Image from "next/image";
import React from "react";
import Scooter from "@/assets/scooter.svg";
import Logo from "@/assets/logo.svg";
import Facebook from "@/assets/ic_facebook.svg";
import LinkedIn from "@/assets/ic_linkedin.svg";
import Instagram from "@/assets/ic_instagram.svg";
const Footer = () => {
  return (
    <div className="flex m-14 justify-between">
      <div className="flex flex-col gap-5">
        <h1 className=" font-bold text-[20px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h1>
        <Image src={Scooter} alt="scooter" />
      </div>
      <div className=" flex flex-col justify-between items-end">
        <div className="flex gap-6 ">
          <div>
            <h2>COMPANY</h2>
            <p>Who We Are</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Report Fraud</p>
          </div>
          <div>
            <h2>LEGAL</h2>
            <p>Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Offer Terms</p>
          </div>
          <div>
            <h2>SUPPORT</h2>
            <p>help@abc.xyz</p>
            <p>(+91) 1234567890</p>
            <p>(+91) 1234567891</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <h4>Copyright (c) 2021</h4>
          <div className="flex gap-1">
            <Image src={Facebook} alt="facebook" />
            <Image src={LinkedIn} alt="linkedin" />
            <Image src={Instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
