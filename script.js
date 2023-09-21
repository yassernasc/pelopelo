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

const scrollToFeedback = () => {
  setTimeout(() => {
    const element = document.getElementById("feedback");
    const y = element.getBoundingClientRect().top + window.scrollY - 50;
    window.scroll({ top: y, behavior: "smooth" });
  }, 550); // 550 is the delay to show the feedback
};

const registerVote = (option) => db.from("votes").insert({ option });
const registerNewEmail = (email) => db.from("newsletter").insert({ email });

document.addEventListener("alpine:init", () => {
  Alpine.data("state", () => ({
    selected: 1,
    voted: false,
    subscribed: false,
    init() {
      const vote = localStorage.getItem("vote");
      if (vote) {
        this.voted = true;
        this.select(+vote);
      }

      const subscribed = localStorage.getItem("subscribed");
      if (subscribed) {
        this.subscribed = true;
      }
    },
    select(n) {
      this.selected = n;
      updateColorTheme(n);
    },
    vote() {
      if (!this.voted) {
        this.voted = true;
        registerVote(this.selected).then();
        scrollToFeedback();
        localStorage.setItem("vote", this.selected);
      }
    },
    subscribe(ev) {
      const email = ev.target[0].value;
      registerNewEmail(email).then();
      this.subscribed = true;
      localStorage.setItem("subscribed", "yes baby");
    },
  }));
});
