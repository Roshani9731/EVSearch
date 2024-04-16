import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const state = [
  "Gujarat",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Kerala",
  "Goa",
  "Delhi",
  "Uttar Pradesh",
  "Bihar",
  "West Bengal",
];
const station = 25;
const city = ["Surat", "Mumbai", "Bangalore", "Chennai", "Kochi", "Panaji"];
const LocationStation = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex gap-2 ">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              {Array(state.length)
                .fill(0)
                .map((_, i) => (
                  <SelectItem value="i">{state[i]}</SelectItem>
                ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              {Array(city.length)
                .fill(0)
                .map((_, i) => (
                  <SelectItem value="i">{city[i]}</SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="m-4 p-4">
          <h4 className=" font-bold">{station} Results Found</h4>
        </div>
        <div>
          {Array(25)
            .fill(0)
            .map((_, i) => (
              <div className="flex border rounded p-5 m-5 justify-between items-center">
                <div>
                  <h2 className=" font-bold">
                    Loremi psum Electric Vehicle Charging Station
                  </h2>
                  <p>
                    Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44,
                    Goregaon (east), Surat - 123456
                  </p>
                  <h1>4 Points</h1>
                </div>
                <div>
                  <Button>₹ 15-20 / slot</Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LocationStation;
