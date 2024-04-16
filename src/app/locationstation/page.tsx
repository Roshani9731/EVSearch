import Navbar from "@/components/shared/Navbar";
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
        <div>
          <h4>25 Results Found</h4>
        </div>
      </div>
    </div>
  );
};

export default LocationStation;
