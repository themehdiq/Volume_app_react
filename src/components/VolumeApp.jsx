import React, { useState, useEffect } from "react";
import volumeMute from "../assets/1.png";
import volumeDown from "../assets/2.png";
import volumeUp from "../assets/3.png";

function VolumeApp() {
  const [count, setCount] = useState(3);
  const [volumeIcon, setVolumeIcon] = useState(volumeMute);

  const incrementVolume = () => {
    if (count < 10) {
      setCount((prevCount) => Math.min(prevCount + 1, 10));
    }
  };

  const decrementVolume = () => {
    if (count > 0) {
      setCount((prevCount) => Math.max(prevCount - 1, 0));
    } else {
      // Reset count to 10 if it's already 0
      setCount(0);
    }
  };
  const resetVolume = () => {
    setCount(0);
  };

  useEffect(() => {
    if (count === 0) {
      setVolumeIcon(volumeMute);
    } else if (count > 7) {
      setVolumeIcon(volumeUp);
    } else if (count > 0) {
      setVolumeIcon(volumeDown);
    } else {
      // Set default volume icon if count is between 1 and 4
      // or any other logic you want to implement
      setVolumeIcon("defaultVolumeIcon");
    }
  }, [count]);

  return (
    <div className="wrapper">
      <h1>Volume App</h1>
      <p>{count}</p>
      <img src={volumeIcon} alt="" /> {/* Display the volume icon */}
      <button className="counter-button" onClick={incrementVolume}>
        Increment Volume
      </button>
      <button className="counter-button" onClick={decrementVolume}>
        Decrement Volume
      </button>
      <button className="counter-button" onClick={resetVolume}>
        Reset Volume
      </button>
    </div>
  );
}

export default VolumeApp;
