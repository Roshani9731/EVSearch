import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Setting from "@/assets/setting.svg";

const Join = () => {
  return (
    <div className="h-[500px] bg-[url('/bgjoin.svg')] flex">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Button variant="outline" className="border rounded-full w-14">
          <Image src={Setting} alt="set" width={20} height={20} />
        </Button>
        <Button variant="outline" className="border rounded-full w-14">
          <Image src={Setting} alt="set" width={20} height={20} />
        </Button>
        <Button variant="outline" className="border rounded-full w-14">
          <Image src={Setting} alt="set" width={20} height={20} />
        </Button>
      </div>
      <div className="flex justify-center items-center flex-col ">
        <h1 className=" text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h1>
        <Button
          className="rounded-full bg-white text-[#01D1FF]"
          variant={"secondary"}
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Join;
