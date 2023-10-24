"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CloseIcon } from "./CloseIcon";
import styles from "./Adopt.module.css";

const getFormattedName = ({ nome, sexo }) =>
  `${sexo === "macho" ? "o" : "a"} ${nome}`;

export const Adopt = ({ pet }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>Quero Adotar</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay class={styles.overlay} />
      <Dialog.Content class={styles.content}>
        <Dialog.Title class={styles.title}>Oba! AAUUUUU..</Dialog.Title>
        <Dialog.Description class={styles.description}>
          Saiba que {getFormattedName(pet)} já está muito
          {pet.sexo === "macho" ? " ansioso" : " ansiosa"} para te encontrar.
          Mas antes, precisamos de algumas informações
        </Dialog.Description>
        <form>
          <div>
            <label>Seu Nome:</label>
            <input />
          </div>

          <div>
            <label>Seu CPF:</label>
            <input />
          </div>

          <div>
            <label>Contato:</label>
            <input />
          </div>

          <Dialog.Close asChild>
            <button class={styles.submit}>Enviar Interesse</button>
          </Dialog.Close>

          <Dialog.Close asChild>
            <CloseIcon className={styles.close} />
          </Dialog.Close>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
