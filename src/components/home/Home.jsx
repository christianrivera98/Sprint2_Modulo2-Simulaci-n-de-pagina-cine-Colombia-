import React from "react";
import NavBar from "../navbar/NavBar.jsx";
import { Swiper } from "../swiper/Swiper.jsx";
import "./Home.scss";
import Main from "../main/main.jsx";

function Home() {
  return (
    <>
      <div className="navBar-swiper-conteiner">
        <div>
          <NavBar />
        </div>
        <div className="Swiper">
          <Swiper />
        </div>
      </div>
      <div className="main">
        <Main/>
      </div>
    </>
  );
}

export default Home;
