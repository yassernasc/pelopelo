import { Album, PetInfo, Header } from "@/components";
import { getImagesFromPet } from "@/services/cloudinary";

import styles from "./PetProfile.module.css";

export const PetProfile = async ({ pet }) => {
  const images = await getImagesFromPet(pet.id);

  return (
    <div class="section">
      <Header />
      <div class={styles.main}>
        <Album images={images} />
        <PetInfo pet={pet} />
      </div>
    </div>
  );
};
