import React from "react";
import Menu from "./menu/Menu";
import CallToAction from "./calltoaction/CallToAction";
import "./homeStyles/main.scss";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <CallToAction />
    </>
  );
};

export default Home;
