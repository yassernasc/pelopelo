import { useState } from "react";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    castrado: false,
    vacinado: false,
    idade: {
      adulto: false,
      jovem: false,
      filhote: false,
    },
    tamanho: {
      mini: false,
      pequeno: false,
      medio: false,
      grande: false,
      gigante: false,
    },
    especial: false,
  });

  return { filters, setFilters };
};
