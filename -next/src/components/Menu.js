import styles from "./Menu.module.css";

export const Menu = () => (
  <nav className={styles.nav}>
    <a href="#landing">Home</a>
    <a href="#poll">Enquete</a>
    <a href="#about">Quem Somos</a>
  </nav>
);
