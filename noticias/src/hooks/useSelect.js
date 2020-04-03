import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  // state del custom hook

  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={e => actualizarState(e.target.value)}
    >
      {opciones.map(opcion => {
        return (
          <option key={opcion.value} value={opcion.value}>
            {opcion.label}
          </option>
        );
      })}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
