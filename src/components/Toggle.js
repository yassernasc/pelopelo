import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`slider ${isOn ? "on" : "off"}`}></div>
    </div>
  );
};
