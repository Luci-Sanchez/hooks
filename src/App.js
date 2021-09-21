import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import AlbumDetail from "./components/albumDetail/AlbumDetail";
import "./App.css";
import Home from "./components/Home/Home";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`App ${darkMode ? "bg-dark" : ""}`}>
      <NavBar />
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/albums/:albumId">
          <AlbumDetail/>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
