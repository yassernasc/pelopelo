import { Menu, Dog, SimpleTextLogo } from "@/components";
import styles from "./Hero.module.css";

export const Hero = () => (
  <section class="section">
    <header class={styles.header}>
      <SimpleTextLogo />
      <Menu />
    </header>

    <div class={styles.main}>
      <div class={styles.messages}>
        <h1>Vamos fazer a diferença pelos animais?</h1>
        <p>
          PeloPêlo é um projeto de apoio às ONGs da causa animal de Campina
          Grande-PB, por meio da tecnologia e inovação.
        </p>

        <a href="#poll" class="button">
          Nos ajude a escolher nosso focinho
        </a>
      </div>
      <div class={styles.dogContainer}>
        <Dog />
      </div>
    </div>
  </section>
);
