import img from "../../assets/how-we-work3x.png";
import css from "./HowWeWork.module.css";

const HowWeWork = () => {
  return (
    <section className={css.howWeWork}>
      <h2 className={css.title}>Як ми працюємо?</h2>
      <div className={css.wrap}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default HowWeWork;
