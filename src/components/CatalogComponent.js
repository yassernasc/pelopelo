"use client";

import { range, splitEvery } from "ramda";
import { useState } from "react";
import c from "clsx";
import { scrollTo } from "@/utils";
import styles from "./CatalogComponent.module.css";
import { Adopt } from "./Adopt";

const Card = ({ nome, sexo, idade, porte, image }) => (
  <div class={styles.card}>
    <img src={image} />
    <div class={styles.details}>
      <h3>{nome}</h3>
      <hr></hr>
      <p>{[sexo, idade, porte].join(", ")}</p>
    </div>
    <Adopt nome={nome} sexo={sexo} />
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
          <Card key={pet.id} {...pet} />
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
