import Footer from "@/components/shared/Footer";
import Join from "@/components/shared/Join";
import Navbar from "@/components/shared/Navbar";
import Signup from "@/components/shared/Signup";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Signup />
      <Join />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
