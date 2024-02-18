import React, { useState } from "react";
import { PlanteContext } from "./PlanteContext";
import { TPLante } from "./PlanteContext";

function PlanteProvider({ children }: { children: React.ReactNode }) {
  const [plantes, setPlante] = useState<TPLante[]>([]);
  const setPlantes = (params: TPLante[]) => {
    setPlante(params);
  };
  return (
    <PlanteContext.Provider value={{ plantes, setPlantes }}>
      {children}
    </PlanteContext.Provider>
  );
}

export default PlanteProvider;