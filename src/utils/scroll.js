export const scroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  console.log(element);
  const yOffset = -100;
  const y =
    Number(element?.getBoundingClientRect().top) + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
