import { createClient } from "@supabase/supabase-js";

const databaseUrl = "https://wjfdckhpgwcdmgpzymkz.supabase.co";
const publicKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZmRja2hwZ3djZG1ncHp5bWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTk0MDAsImV4cCI6MjAxMDM3NTQwMH0.a144HyCKUyh_PDPTPFstXLqNqSis9ZQF4P9ChHsP7kY";

const db = createClient(databaseUrl, publicKey);

export const registerVote = (option) => db.from("votes").insert({ option });
export const registerNewEmail = (email) =>
  db.from("newsletter").insert({ email });
export const getAnimals = () => db.from("animal").select();
