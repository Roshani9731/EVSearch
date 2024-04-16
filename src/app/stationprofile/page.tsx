import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import Profile from "@/assets/profile.svg";
import { Button } from "@/components/ui/button";

const StationProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-5 justify-center">
        <h2>Charging Points</h2>
        <div>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <>
                <div className="border rounded-md flex flex-col m-5">
                  <div className="flex justify-between items-center gap-8 m-5 p-5">
                    <div>
                      <h2 className=" font-bold">
                        Loremi psum Electric Vehicle Charging Station
                      </h2>
                      <p className=" text-sm">
                        Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44,
                        Goregaon (east), Surat - 123456
                      </p>
                    </div>
                    <Button>Pending</Button>
                  </div>
                  <div className="flex justify-between ml-10 mr-10 mb-10 items-end">
                    <div>
                      <h2>Point no : 4</h2>
                      <p>Slot timing : 4 14:30 - 15:30</p>
                      <p>Charges : ₹30</p>
                    </div>
                    <h3>15/10/24</h3>
                  </div>
                </div>
              </>
            ))}
        </div>
        <Separator orientation="vertical" className="border" />
        <div className="flex flex-col gap-5">
          <h2>Station Info</h2>
          <Image src={Profile} alt="profile" className="" />
          <div>
            <p>+911234567890</p>
            <p>RaynaFranci@gmail.com</p>
            <p>Surat, Gujarat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationProfile;
