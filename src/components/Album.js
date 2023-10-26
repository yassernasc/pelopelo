"use client";

import { applyTransformation } from "@/services/cloudinary";
import { useState } from "react";
import styles from "./Album.module.css";

export const Album = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div class={styles.container}>
      <img
        class={styles.full}
        src={applyTransformation(images[photoIndex], "full")}
      />
      <div class={styles.thumbs}>
        {images.map((image, index) => (
          <img
            class={styles.thumb}
            key={image}
            onClick={() => setPhotoIndex(index)}
            src={applyTransformation(image, "thumb")}
          />
        ))}
      </div>
    </div>
  );
};
