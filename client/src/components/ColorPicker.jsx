import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#212738ff",
          "#f97068ff",
          "#d1d646ff",
          "#edf2efff",
          "#57c4e5ff",
          "#dd614aff",
          "#f48668ff",
          "#f4a698ff",
          "#c5c392ff",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
