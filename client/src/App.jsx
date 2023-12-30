import "./App.css";

import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import state from "./store";

function App() {
  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      <h1 className="head-text">ThreeJS</h1>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
