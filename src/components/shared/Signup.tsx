import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Sign from "@/assets/sign.svg";

const Signup = () => {
  return (
    <div className="h-[500px] flex justify-center items-center gap-10">
      <div className="flex justify-center items-center flex-col w-[50%] gap-7">
        <h1 className=" font-semibold text-3xl w-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h1>

        <div className="flex gap-4 ml-[-75px]">
          <Button className=" bg-[#01D1FF] rounded-full">Sign Up </Button>
          <Button className="bg-[#01D1FF] rounded-full">Sign In</Button>
        </div>
      </div>
      <div className="w-[50%]">
        <Image src={Sign} alt="BG" width={500} height={500} />
      </div>
    </div>
  );
};

export default Signup;
