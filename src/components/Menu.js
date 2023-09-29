import styles from "./Menu.module.css";

const items = [
  ["Enquete", "#poll"],
  ["Quem Somos", "#about"],
  ["Parceiros", "#partners"],
  ["Contato", "#footer"],
];

export const Menu = () => (
  <nav className={styles.nav}>
    {items.map(([label, href]) => (
      <a key={href} href={href}>
        {label}
      </a>
    ))}
  </nav>
);
