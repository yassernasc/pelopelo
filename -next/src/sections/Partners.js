import styles from "./Partners.module.css";

const email = "contato@pelopelo.com.br";

export const Partners = () => (
  <section class="section" id="partners">
    <h2>Nossos Parceiros</h2>
    <div class={styles.images}>
      <div class={styles.imgContainer}>
        <img src="patinhas.png" />
      </div>
      <div class={styles.imgContainer}>
        <img src="arca.png" />
      </div>
    </div>
  </section>
);
