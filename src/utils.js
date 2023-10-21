export const scrollTo = (elem) => {
  const element = document.getElementById(elem);
  const y = element.getBoundingClientRect().top + window.scrollY - 30;
  window.scroll({ top: y, behavior: "smooth" });
};
