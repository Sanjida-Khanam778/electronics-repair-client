import React from "react";

import Banner from "../../Components/Banner";
import PopularService from "../../Components/PopularService";
const Home = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Banner></Banner>
      <PopularService></PopularService>
    </div>
  );
};

export default Home;
