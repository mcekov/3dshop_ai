import "./App.css";

import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { useSnapshot } from "valtio";

import state from "./store";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
