import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  download,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    alt: "color-picker-icon",
  },
  {
    name: "filepicker",
    icon: fileIcon,
    alt: "file-picker-icon",
  },
  {
    name: "aipicker",
    icon: ai,
    alt: "ai-picker-icon",
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    alt: "logo-shirt-icon",
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    alt: "style-shirt-icon",
  },
  {
    name: "downloadPNG",
    icon: download,
    alt: "download-png",
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
