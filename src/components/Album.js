import { applyTransformation } from "@/services/cloudinary";
import styles from "./Album.module.css";

export const Album = ({ images }) => (
  <div class={styles.container}>
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
