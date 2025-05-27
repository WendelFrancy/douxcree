import React from "react";
import Menu from "./menu/Menu";
import CallToAction from "./calltoaction/CallToAction";
import Whydx from "../whydx/Whydx";
import HighLights from "../highlight/HighLights";
import Coments from "../coments/Coments";
import News from "../news/News";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <CallToAction />
      <Whydx/>
      <HighLights/>
      <Coments/>
      <News/>
    </>
  );
};

export default Home;
