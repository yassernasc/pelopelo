import * as Dialog from "@radix-ui/react-dialog";
import c from "clsx";
import { applyTransformation } from "@/services/cloudinary";
import { Castrado, Especial, Vacina, Vermifugo } from "@/icons";
import styles from "./PetProfile.module.css";
import { Adopt } from "./Adopt";

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("pt-BR");

const IconsMap = {
  castrado: Castrado,
  especial: Especial,
  vacinado: Vacina,
  vermifugado: Vermifugo,
};

const ProfileInfoCard = ({ label, value }) => {
  const Icon = IconsMap[label];

  return (
    <div class={styles.profileInfoCard}>
      <Icon class={styles.icon} active={value} />
      <h3 class={c(!value && styles.inactive)}>{label}</h3>
      <div class={c(!value && styles.inactive)}></div>
    </div>
  );
};

const Album = ({ images }) => (
  <div class={styles.album}>
    <img class={styles.full} src={applyTransformation(images[0], "full")} />
    <div class={styles.thumbs}>
      {images.map((i) => (
        <img
          class={styles.thumb}
          key={i}
          src={applyTransformation(i, "thumb")}
        />
      ))}
    </div>
  </div>
);

const Profile = ({ pet }) => (
  <div class={styles.profile}>
    <div class={styles.profileHeader}>
      <h1>{pet.nome}</h1>
      <p>Publicado em {formatDate(pet.created_at)}</p>
    </div>
    <div class={styles.profileInfoContainer}>
      <div class={styles.profileInfo}>
        <span>Espécie</span>
        <span>{pet.especie}</span>
      </div>
      <div class={styles.profileInfo}>
        <span>Sexo</span>
        <span>{pet.sexo}</span>
      </div>
      <div class={styles.profileInfo}>
        <span>Idade</span>
        <span>{pet.idade}</span>
      </div>
      <div class={styles.profileInfo}>
        <span>Tamanho</span>
        <span>{pet.porte}</span>
      </div>
      <div class={styles.profileInfo}>
        <span>ONG</span>
        <span>{pet.ong}</span>
      </div>
    </div>
    <div class={styles.profileIcons}>
      <ProfileInfoCard label="vacinado" value={pet.vacinado} />
      <ProfileInfoCard label="vermifugado" value={pet.vermifugado} />
      <ProfileInfoCard label="castrado" value={pet.castrado} />
      <ProfileInfoCard label="especial" value={pet.especial} />
    </div>

    <Adopt pet={pet} />
  </div>
);

export const PetProfile = ({ pet }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>Adotar</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay class={styles.overlay} />
      <Dialog.Content class={styles.content}>
        <div class={styles.contentContainer}>
          <Album images={pet.images} />
          <Profile pet={pet} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
