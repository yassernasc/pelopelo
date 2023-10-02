import c from "clsx";
import styles from "./Footer.module.css";

import { TempLogo } from "@/components";

export const Footer = () => (
  <section class="colored-section" id="footer">
    <div class={c("colored-section-content", styles.content)}>
      <TempLogo />
      <div class={styles.verticalLine}></div>
      <div class={styles.social}>
        <div class={styles.icons}>
          <a target="_blank" href="https://www.instagram.com/pelopelocg">
            <div class={styles.iconContainer}>
              <img src="instagram.png" />
            </div>
          </a>
          <div class={styles.iconContainer}>
            <img src="zap.png" />
          </div>
          <div class={styles.iconContainer}>
            <img src="mail.png" />
          </div>
        </div>
        <span>PeloPelo - 2023</span>
      </div>
    </div>
  </section>
);
