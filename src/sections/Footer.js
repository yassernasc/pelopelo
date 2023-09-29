import c from "clsx";
import styles from "./Footer.module.css";

import { TempLogo } from "@/components";

const email = "contato@pelopelo.com.br";

export const Footer = () => (
  <section class="colored-section" id="footer">
    <div class={c("colored-section-content", styles.content)}>
      <TempLogo />
      <div class={styles.verticalLine}></div>
      <div class={styles.social}>
        <div class={styles.icons}>
          <div class={styles.iconContainer}>
            <img src="instagram.png" />
          </div>
          <div class={styles.iconContainer}>
            <img src="zap.png" />
          </div>
          <div class={styles.iconContainer}>
            <img src="zap.png" />
          </div>
        </div>
        <span>{email}</span>
      </div>
    </div>
  </section>
);
