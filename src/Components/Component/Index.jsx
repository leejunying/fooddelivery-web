import React from "react";
import Component_C from "./Ccomponent";
import Component_F from "./Fcomponent";
import { useState } from "react";

const Index = () => {
  const [F, setF] = useState(0);
  const [C, setC] = useState(0);

  const C_to_F = (Cvalue) => {
    return Cvalue * 1.8 + 32;
  };

  const F_to_C = (Fvalue) => {
    return (Fvalue - 32) / 1.8;
  };

  const HandleChange = (e, type) => {
    if (type == "C") {
      setC(e.target.value);
      setF(C_to_F(e.target.value));
    }

    if (type == "F") {
      setF(e.target.value);
      setC(F_to_C(e.target.value));
    }
  };

  return (
    <div>
      <div>
        <Component_C C={C} HandleChange={HandleChange}></Component_C>
      </div>

      <div>
        <Component_F F={F} HandleChange={HandleChange}></Component_F>
      </div>
    </div>
  );
};

export default Index;
