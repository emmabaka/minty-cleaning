export const addBlurToElement = (svgRef, item, id) => {
  const filter = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "filter"
  );

  filter.setAttribute("id", `blur-${id}`);

  const blur = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "feGaussianBlur"
  );
  blur.setAttribute("in", "SourceGraphic");
  blur.setAttribute("stdDeviation", "1.5"); 
  filter.appendChild(blur);
  svgRef.current.appendChild(filter);

  item.style.filter = `url(#blur-${id})`;
};

export const removeAllFilters = () => {
  const filterElements = document.querySelectorAll("filter");

  filterElements.forEach((el) => {
    const filterElement = el;
    filterElement.parentNode.removeChild(filterElement);
  });
};
