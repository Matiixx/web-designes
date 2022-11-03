import { useState } from "react";
import "./App.css";
import { MainContent } from "./components/MainContent";
import NavBar from "./components/NavBar";
import NavBarButton from "./components/NavBarButton";

function App() {
  const [toggleNavBar, setToggleNavBar] = useState(false);

  return (
    <div className="App">
      <MainContent isNavBarOpened={toggleNavBar} />
      <NavBar isOpened={toggleNavBar} />
      <NavBarButton toggleNavBar={setToggleNavBar} />
    </div>
  );
}

export default App;
