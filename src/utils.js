export const scrollTo = (elem) => {
  const element = document.getElementById(elem);
  const y = element.getBoundingClientRect().top + window.scrollY - 30;
  window.scroll({ top: y, behavior: "smooth" });
};

const formatEspecie = (especie) => (especie === "gato" ? "Felina" : "Canina");
const formatOng = (ong) => {
  const OngsMap = {
    "tio-patinhas": "Tio Patinhas",
    "arca-do-tota": "Arca do Tota",
  };

  return OngsMap[ong];
};
const formatPorte = (size) => {
  const SizeMap = {
    pequeno: "Pequeno Porte",
    medio: "Médio Porte",
    grande: "Grande Porte",
    gigante: "Gigantão",
  };

  return SizeMap[size];
};
const formatSexo = (sex) => (sex === "femea" ? "Fêmea" : "Macho");

export const formatPet = (pet) => ({
  ...pet,
  especie: formatEspecie(pet.especie),
  ong: formatOng(pet.ong),
  porte: formatPorte(pet.porte),
  sexo: formatSexo(pet.sexo),
});
