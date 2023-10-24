import styles from "./Header.module.css";
import { SimpleTextLogo } from "@/components/SimpleTextLogo";

const items = [
  ["Enquete", "#poll"],
  ["Quem Somos", "#about"],
  ["Parceiros", "#partners"],
  ["Contato", "#footer"],
];

export const Header = () => (
  <header class={styles.container}>
    <SimpleTextLogo />
    <nav className={styles.nav}>
      {items.map(([label, href]) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </nav>
  </header>
);
