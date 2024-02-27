import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#4C86A8",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./generic_logo.png",
  fullDecal: "./generic_logo.png",
});

export default state;
