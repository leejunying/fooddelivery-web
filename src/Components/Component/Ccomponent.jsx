import React from "react";

const Component_C = (props) => {
  return (
    <div>
      <input
        style={{ pading: "2px" }}
        placeholder="C"
        onChange={(e) => props.HandleChange(e, "C")}
        value={props.C}
      ></input>
    </div>
  );
};

export default Component_C;
