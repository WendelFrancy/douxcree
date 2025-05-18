import React from "react";
import Menu from "./menu/Menu";
import CallToAction from "./calltoaction/CallToAction";
import Whydx from "../whydx/Whydx";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <CallToAction />
      <Whydx/>
    </>
  );
};

export default Home;
