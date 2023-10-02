import { createClient } from "@supabase/supabase-js";
import { useState, useEffect, useCallback } from "react";

const databaseUrl = "https://wjfdckhpgwcdmgpzymkz.supabase.co";
const publicKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZmRja2hwZ3djZG1ncHp5bWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTk0MDAsImV4cCI6MjAxMDM3NTQwMH0.a144HyCKUyh_PDPTPFstXLqNqSis9ZQF4P9ChHsP7kY";

const db = createClient(databaseUrl, publicKey);

const registerVote = (option) => db.from("votes").insert({ option });
const registerNewEmail = (email) => db.from("newsletter").insert({ email });

const updateColorTheme = (n) => {
  let root = document.documentElement;
  root.style.setProperty("--base", `var(--base-${n})`);
  root.style.setProperty("--primary", `var(--primary-${n})`);
  root.style.setProperty("--secondary", `var(--secondary-${n})`);
};

export const useDatabase = () => {
  const [selected, setSelected] = useState(1);
  const [voted, setVoted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const pastVote = localStorage.getItem("vote");
    if (pastVote) {
      setVoted(true);
      setSelected(+pastVote);
    }
  }, []);

  useEffect(() => {
    const pastSubscription = localStorage.getItem("subscribed");
    if (pastSubscription) {
      setSubscribed(true);
    }
  }, []);

  useEffect(() => {
    updateColorTheme(selected);
  }, [selected]);

  const vote = useCallback(() => {
    if (!voted) {
      setVoted(true);
      registerVote(selected).then();
      localStorage.setItem("vote", selected);
    }
  }, [selected, voted, setVoted]);

  const subscribe = useCallback(
    (email) => {
      registerNewEmail(email).then();
      setSubscribed(true);
      localStorage.setItem("subscribed", "yes baby");
    },
    [setSubscribed],
  );

  return { vote, voted, selected, setSelected, subscribe, subscribed };
};
