import c from "clsx";
import styles from "./Footer.module.css";

export const Footer = () => (
  <>
    <section class="section secondary" id="footer">
      <div class={c("section-content", styles.content)}>
        <div class={styles.logoContainer}>
          <img src={`/1.png`} />
          <img src="/tipografia.png" />
        </div>
        <div class={styles.verticalLine}></div>
        <div class={styles.social}>
          <div class={styles.icons}>
            <a target="_blank" href="https://www.instagram.com/pelopelocg">
              <div class={styles.iconContainer}>
                <img src="/instagram.png" />
              </div>
            </a>
            <div class={styles.iconContainer}>
              <img src="/zap.png" />
            </div>
            <a target="_blank" href="mailto:contato@pelopelo.org">
              <div class={styles.iconContainer}>
                <img src="/mail.png" />
              </div>
            </a>
          </div>
          <span>contato@pelopelo.org</span>
        </div>
      </div>
    </section>
    <section class={c("colored-section", styles.end)}>
      <p>PeloPelo - Fazendo a diferença na causa animal - 2023</p>
    </section>
  </>
);
