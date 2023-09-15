const databaseUrl = "https://wjfdckhpgwcdmgpzymkz.supabase.co";
const publicKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZmRja2hwZ3djZG1ncHp5bWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTk0MDAsImV4cCI6MjAxMDM3NTQwMH0.a144HyCKUyh_PDPTPFstXLqNqSis9ZQF4P9ChHsP7kY";

const db = supabase.createClient(databaseUrl, publicKey);

const updateColorTheme = (n) => {
  let root = document.documentElement;
  root.style.setProperty("--base", `var(--base-${n})`);
  root.style.setProperty("--primary", `var(--primary-${n})`);
  root.style.setProperty("--secondary", `var(--secondary-${n})`);
};

const registerVote = (option) => db.from("votes").insert({ option });

document.addEventListener("alpine:init", () => {
  Alpine.data("state", () => ({
    selected: 1,
    voted: false,
    voteText: "Votar",
    select(n) {
      this.selected = n;
      updateColorTheme(n);
    },
    vote() {
      if (!this.voted) {
        this.voted = true;
        this.voteText = "Obrigado!";
        registerVote(this.selected).then();
      }
    },
  }));
});
