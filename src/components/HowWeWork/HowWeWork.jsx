import { useRef } from "react";
import img from "../../assets/how-we-work3x.png";
import css from "./HowWeWork.module.css";

const HowWeWork = () => {
  const image = useRef(null);
  console.log(image.current);
  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  return (
    <section id="howWeWork" className={css.howWeWork}>
      <h2 className={css.title}>Як ми працюємо?</h2>
      <div className={css.wrap}>
        <img
          src={img}
          alt="Як ми працюємо?"
          draggable="false"
          ref={image}
          onMouseDown={(e) => {
            isDragging = true;
            startPosition = e.clientX - currentTranslate;
          }}
          onMouseMove={(e) => {
            if (isDragging) {
              const newPosition = e.clientX - startPosition;
              image.current.style.transform = `translateX(${newPosition}px)`;
              currentTranslate = newPosition;
            }
          }}
        />
      </div>
    </section>
  );
};

export default HowWeWork;
