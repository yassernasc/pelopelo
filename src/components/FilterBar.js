import { useFilters } from "../hooks/useFilters";
import "./FilterBar.css";
import { ToggleSwitch } from "./Toggle";

export const FilterBar = () => {
  const { filters, setFilters } = useFilters();

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  const handleAgeChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      idade: {
        ...prevFilters.idade,
        [name]: checked,
      },
    }));
  };

  const handleSizeChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      tamanho: {
        ...prevFilters.tamanho,
        [name]: checked,
      },
    }));
  };

  return (
    <div class="filter-bar">
      <form>
        <label>
          CASTRADO:
          <ToggleSwitch
            type="checkbox"
            name="castrado"
            checked={filters.castrado}
            onChange={handleFilterChange}
          />
        </label>
        <br />
        <label>
          VACINADO:
          <ToggleSwitch
            type="checkbox"
            name="vacinado"
            checked={filters.vacinado}
            onChange={handleFilterChange}
          />
        </label>
        <br />
        <h3>IDADE:</h3>
        <label>
          <input
            type="checkbox"
            name="adulto"
            checked={filters.idade.adulto}
            onChange={handleAgeChange}
          />
          ADULTO
        </label>
        <label>
          <input
            type="checkbox"
            name="filhote"
            checked={filters.idade.filhote}
            onChange={handleAgeChange}
          />
          FILHOTE
        </label>
        <label>
          <input
            type="checkbox"
            name="jovem"
            checked={filters.idade.jovem}
            onChange={handleAgeChange}
          />
          JOVEM
        </label>
        <br />
        <h3>TAMANHO:</h3>
        <label>
          <input
            type="checkbox"
            name="tamanho"
            checked={filters.tamanho.mini}
            onChange={handleSizeChange}
          />
          MINI
        </label>
        <label>
          <input
            type="checkbox"
            name="tamanho"
            checked={filters.tamanho.pequeno}
            onChange={handleSizeChange}
          />
          PEQUENO
        </label>
        <label>
          <input
            type="checkbox"
            name="tamanho"
            checked={filters.tamanho.medio}
            onChange={handleSizeChange}
          />
          MÉDIO
        </label>
        <label>
          <input
            type="checkbox"
            name="tamanho"
            checked={filters.tamanho.grande}
            onChange={handleSizeChange}
          />
          GRANDE
        </label>
        <label>
          <input
            type="checkbox"
            name="tamanho"
            checked={filters.tamanho.gigante}
            onChange={handleSizeChange}
          />
          GIGANTE
        </label>
        <br />
        <label>
          ESPECIAL:
          <ToggleSwitch
            type="checkbox"
            name="especial"
            checked={filters.especial}
            onChange={handleFilterChange}
          />
        </label>
      </form>
      {/* Use the state values (filters) in your filtering logic */}
      {/* For example, you can filter a list of items based on the selected filters */}
    </div>
  );
};
