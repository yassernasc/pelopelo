"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CloseIcon } from "./CloseIcon";
import styles from "./Adopt.module.css";
import { useState } from "react";
import { registerAdopter } from "@/services/supabase";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const initialState = {
  nome: "",
  cpf: "",
  contato: "",
};

export const Adopt = ({ pet }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit: onSubmit,
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });

  const handleSubmit = (data) => {
    console.log(data);
    // alert(JSON.stringify(data));
    // reset();
  };

  const [state, setState] = useState(initialState);

  const getFormattedName = ({ nome, sexo }) =>
    `${sexo === "macho" ? "o" : "a"} ${nome}`;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Quero Adotar</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class={styles.overlay} />
        <Dialog.Content class={styles.content}>
          <Dialog.Title class={styles.title}>Obaaa! AAUUUUU..</Dialog.Title>
          <Dialog.Description class={styles.description}>
            Saiba que {getFormattedName(pet)} já está muito
            {pet.sexo === "macho" ? " ansioso" : " ansiosa"} para te encontrar.
            Mas antes, precisamos de algumas informações
          </Dialog.Description>
          <form onSubmit={onSubmit(handleSubmit)}>
            <label htmlFor="nome">Seu Nome</label>
            <br />
            <Controller
              control={control}
              name="nome"
              type="text"
              rules={{
                required: true,
                pattern: {
                  value:
                    /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
                  message: "Por favor preencha corretamente",
                },
              }}
              render={({ field: { onChange, onBlur, ref } }) => (
                <InputMask
                  defaultValue={state.nome}
                  mask=""
                  placeholder="Fulano de Tal"
                  onBlur={onBlur}
                  onChange={onChange}
                  // onChange={(event) => {
                  //   setState({ ...state, nome: event.target.value });
                  // }}
                  inputRef={ref}
                  maskPlaceholder={null}
                />
              )}
            />
            <div>
              {errors?.nome && <p>{errors?.nome?.message || "Error!"}</p>}
            </div>

            <label htmlFor="cpf">Seu CPF</label>
            <br />
            <Controller
              control={control}
              name="cpf"
              type="number"
              rules={{
                required: true,
                pattern: {
                  value:
                    /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
                  message: "Por favor coloque um CPF válido",
                },
              }}
              render={({ field: { onChange, onBlur, ref } }) => (
                <InputMask
                  defaultValue={state.cpf}
                  mask=""
                  placeholder="000.000.000-00"
                  onBlur={onBlur}
                  onChange={onChange}
                  // onChange={(event) => {
                  //   setState({ ...state, cpf: event.target.value });
                  // }}
                  inputRef={ref}
                  maskPlaceholder={null}
                />
              )}
            />
            <div>
              {errors?.cpf && <p>{errors?.cpf?.message || "Error!"}</p>}
            </div>

            <label htmlFor="contato">Contato</label>
            <br />
            <Controller
              control={control}
              name="contato"
              type="number"
              rules={{
                required: true,
                pattern: {
                  value: /^(?=.*\d).{19,}$/,
                  message: "Por favor coloque um telefone de contato válido",
                },
              }}
              render={({ field: { onChange, onBlur, ref } }) => (
                <InputMask
                  defaultValue={state.contato}
                  mask="(99) 9 9999-9999"
                  placeholder="(83) 9 ____-____"
                  onBlur={onBlur}
                  onChange={onChange}
                  // onChange={(event) => {
                  //   setState({ ...state, contato: event.target.value });
                  // }}
                  inputRef={ref}
                  maskPlaceholder={null}
                />
              )}
            />
            <div>
              {errors?.contato && <p>{errors?.contato?.message || "Error!"}</p>}
            </div>

            <label>
              Aceito compartilhar meus dados com a ONG responsável pelo animal
              <input
                {...register("checkbox", {
                  required: "Aceitar os Termos é obrigatório",
                })}
                type="checkbox"
              />
            </label>
            <div>
              {errors?.checkbox && (
                <p>{errors?.checkbox?.message || "Error!"}</p>
              )}
            </div>

            <button type="submit" disabled={isValid} class={styles.submit}>
              Enviar Interesse
            </button>
            <Dialog.Close asChild>
              <CloseIcon className={styles.close} />
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
