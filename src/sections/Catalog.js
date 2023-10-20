import { getAnimals } from "@/services/supabase";
import { getImages } from "@/services/cloudinary";

import styles from "./Catalog.module.css";

const Card = ({ nome, sexo, idade, porte, image }) => (
  <div class={styles.card}>
    <img src={image} />
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

  const images = await getImages();
  const getImage = (pet) => images.find((i) => i.id == pet.id).url;

  return (
    <section class="section" id="catalog">
      <h2>Encontre seu novo amigo</h2>
      <div class={styles.list}>
        {pets.map((pet) => (
          <Card key={pet.id} {...pet} image={getImage(pet)} />
        ))}
      </div>
    </section>
  );
};
