import Link from "next/link";
import { SimpleTextLogo } from "@/components/SimpleTextLogo";
import styles from "./Header.module.css";

const items = [
  ["Adote", "#catalog"],
  ["Quem Somos", "#about"],
  ["Parceiros", "#partners"],
  ["Contato", "#footer"],
];

export const Header = () => (
  <header class={styles.container}>
    <Link href="/">
      <SimpleTextLogo />
    </Link>
    <nav className={styles.nav}>
      {items.map(([label, href]) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </nav>
  </header>
);
