import styles from "./Catalog.module.css";

const pets = [
  { id: 0, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
  { id: 1, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
  { id: 2, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
  { id: 3, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
  { id: 4, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
  { id: 5, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
  { id: 6, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
  { id: 7, name: "apollo", sex: "macho", description: "13 anos, porte médio" },
];

const pages = ["<", "1", "2", "3", "4", "5", "6", ">"];

const Card = ({ pet }) => (
  <div class={styles.card}>
    <img src="https://via.placeholder.com/150x180" />
    <div class={styles.details}>
      <div class={styles.cardHeader}>
        <h3>{pet.name}</h3>
        <p>{pet.sex}</p>
      </div>
      <hr></hr>
      <p>{pet.description}</p>
    </div>
    <button>Adotar</button>
  </div>
);

export const Catalog = () => (
  <section class="section" id="catalog">
    <h2>Encontre seu novo amigo</h2>
    <div class={styles.list}>
      {pets.map((pet) => (
        <Card key={pet.id} pet={pet} />
      ))}
    </div>
  </section>
);
