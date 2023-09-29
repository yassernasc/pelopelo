import { useEffect, useState } from "react";
import c from "clsx";
import styles from "./Poll.module.css";

import { Button } from "@/components";

const options = [1, 2, 3, 4, 5];
const updateColorTheme = (n) => {
  let root = document.documentElement;
  root.style.setProperty("--base", `var(--base-${n})`);
  root.style.setProperty("--primary", `var(--primary-${n})`);
  root.style.setProperty("--secondary", `var(--secondary-${n})`);
};

export const Poll = () => {
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    updateColorTheme(selected);
  }, [selected]);

  return (
    <section class="colored-section" id="poll">
      <div class={c("colored-section-content", styles.content)}>
        <h2>Qual ficou mais animal?</h2>

        <div class={styles.options}>
          {options.map((option) => (
            <div
              key={option}
              class={c(styles.option, selected === option && styles.selected)}
              onClick={() => setSelected(option)}
            >
              <img src={`${option}.png`} />
              <img src="pelopelo-light.png" />
            </div>
          ))}
        </div>
        <Button>Votar</Button>
      </div>
    </section>
  );
};
