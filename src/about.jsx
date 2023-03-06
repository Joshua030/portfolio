import React, { useState } from "react";

const App = () => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const style = hovered ? { backgroundColor: "#333", color: "#fff" } : {};

  return (
    <div>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        Hover over me!
      </div>
      <hr />
      <div style={style}>Was it hovered?</div>
      <hr />
      {hovered && <div>Yes!!</div>}
    </div>
  );
};

export default App;
