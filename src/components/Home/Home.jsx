import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import AlbumList from "../albumList/AlbumList";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <h1 className={darkMode ? "text-primary" : ""}>My Albums</h1>
      <AlbumList />
    </div>
  );
};

export default Home;
