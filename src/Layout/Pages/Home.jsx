import React from "react";

import Banner from "../../Components/Banner";
import PopularService from "../../Components/PopularService";
import Extra1 from "../../Components/extra1";
const Home = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Banner></Banner>
      <PopularService></PopularService>
      <Extra1></Extra1>
    </div>
  );
};

export default Home;
