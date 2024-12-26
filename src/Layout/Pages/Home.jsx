import React from "react";

import Banner from "../../Components/Banner";
import PopularService from "../../Components/PopularService";
import Extra1 from "../../Components/extra1";
import Extra2 from "../../Components/Extra2";
import { ScrollRestoration } from "react-router-dom";
const Home = () => {
  return (
    <div className=" px-6 py-10 mx-auto">
      <ScrollRestoration></ScrollRestoration>
      <Banner></Banner>
      <PopularService></PopularService>
      <Extra1></Extra1>
      <Extra2></Extra2>
    </div>
  );
};

export default Home;
