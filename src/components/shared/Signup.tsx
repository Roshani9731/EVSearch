import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Sign from "@/assets/sign.svg";

const Signup = () => {
  return (
    <div className="flex justify-between items-center gap-5 ">
      <div className="flex justify-between items-center flex-col gap-7">
        <h1 className="text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h1>

        <div className="flex gap-4 ">
          <Button className="rounded-full">Sign Up </Button>
          <Button className=" rounded-full">Sign In</Button>
        </div>
      </div>
      <div>
        <Image src={Sign} alt="BG" width={500} height={500} />
      </div>
    </div>
  );
};

export default Signup;
