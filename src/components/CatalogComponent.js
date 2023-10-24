"use client";

import { range, splitEvery } from "ramda";
import { useState } from "react";
import c from "clsx";
import { scrollTo } from "@/utils";
import { applyTransformation } from "@/services/cloudinary";
import styles from "./CatalogComponent.module.css";
import { PetProfile } from "./PetProfile";

const Card = ({ pet }) => (
  <div class={styles.card}>
    <img src={applyTransformation(pet.images[0], "mini")} />
    <div class={styles.details}>
      <div>
        <h3>{pet.nome}</h3>
        <p>{pet.sexo}</p>
      </div>
      <hr></hr>
      <p>
        {pet.idade}, {pet.porte}
      </p>
    </div>
    <PetProfile pet={pet} />
  </div>
);

const PAGE_SIZE = 8;

export const CatalogComponent = ({ pets }) => {
  const [activePageIndex, setActivePageIndex] = useState(1);

  const pages = Math.ceil(pets.length / PAGE_SIZE);
  const groupedPets = splitEvery(PAGE_SIZE, pets);
  const activePage = groupedPets[activePageIndex - 1];

  const handlePageChange = (newIndex) => {
    setActivePageIndex(newIndex);
    scrollTo("catalog");
  };

  return (
    <section class="section" id="catalog">
      <h2>Encontre seu novo amigo</h2>
      <div class={styles.list}>
        {activePage.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </div>
      <div class={styles.pagination}>
        {range(1, pages + 1).map((page) => (
          <span
            key={page}
            className={c(activePageIndex === page && styles.activePage)}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </section>
  );
};
