import styles from "./Partners.module.css";

const ongs = [
  { image: "patinhas", link: "https://www.instagram.com/clubetiopatinhas" },
  { image: "tota", link: "https://www.instagram.com/arcadotota" },
  { image: "animaisdecg", link: "https://www.instagram.com/animaisdecg" },
];

export const Partners = () => (
  <section class="section" id="partners">
    <h2>Nossos Parceiros</h2>
    <div class={styles.images}>
      {ongs.map((ong) => (
        <a target="_blank" href={ong.link}>
          <img src={`${ong.image}.png`} />
        </a>
      ))}
    </div>
  </section>
);
