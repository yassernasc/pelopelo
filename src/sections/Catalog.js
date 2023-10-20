import { getAnimals } from "@/services/supabase";
import styles from "./Catalog.module.css";

const Card = ({ nome, sexo, idade, porte }) => (
  <div class={styles.card}>
    <img src="https://via.placeholder.com/150x180" />
    <div class={styles.details}>
      <h3>{nome}</h3>
      <hr></hr>
      <p>{[sexo, idade, porte].join(", ")}</p>
    </div>
    <button>Adotar</button>
  </div>
);

export const Catalog = async () => {
  const { data: pets } = await getAnimals();

  return (
    <section class="section" id="catalog">
      <h2>Encontre seu novo amigo</h2>
      <div class={styles.list}>
        {pets.map((pet) => (
          <Card key={pet.id} {...pet} />
        ))}
      </div>
    </section>
  );
};
