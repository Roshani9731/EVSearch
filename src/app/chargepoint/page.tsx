import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import React from "react";
const Point = 100;
const price = 15;
const ChargePoint = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between m-10">
        <div className="flex gap-5">
          <div className="bg-primary w-[250px] h-[200px] rounded-md"></div>
          <div>
            <h2 className=" font-bold">
              Loremi psum Electric Vehicle Charging Station
            </h2>
            <p>
              Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44, Goregaon
              (east), Surat - 123456
            </p>
          </div>
        </div>
        <div>{Point} points</div>
      </div>
      <Separator className=" m-2" />
      <h3 className="flex justify-center m-8 font-extrabold text-2xl">
        Charging Points
      </h3>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div className="flex justify-between m-5 p-4 border rounded-md items-center">
            <h4 className="items-center">1 | 45 KW</h4>
            <Button>₹ {price} / slot </Button>
          </div>
        ))}
    </div>
  );
};

export default ChargePoint;
