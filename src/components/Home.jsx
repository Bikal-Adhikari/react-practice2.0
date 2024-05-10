import React from "react";
import { useGlobalContext } from "../Context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSiderbar, openModal } = useGlobalContext();
  return (
    <main>
      <button onClick={openSiderbar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
