import React from "react";
import Menu from "./menu/Menu";
import CallToAction from "./calltoaction/CallToAction";
import Whydx from "../whydx/Whydx";
import HighLights from "../highlight/HighLights";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <CallToAction />
      <Whydx/>
      <HighLights/>
    </>
  );
};

export default Home;
