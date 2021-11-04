import React from "react";

const Component_F = (props) => {
  return (
    <div>
      <input
        style={{ pading: "2px" }}
        placeholder="F"
        onChange={(e) => props.HandleChange(e, "F")}
        value={props.F}
      ></input>
    </div>
  );
};

export default Component_F;
