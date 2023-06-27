import star from "../../assets/star.png";
import medal from "../../assets/medal.png";
import like from "../../assets/like.png";
import security from "../../assets/security.png";
import care from "../../assets/care.png";
import css from "./Advantages.module.css";

const Advantages = () => {
  return (
    <section className={css.advantages}>
      <div className="container">
        <h2 className={css.title}>Чому ми?</h2>
        <ul className={css.listWrapper}>
          <li className={css.item}>
            <img src={star} alt="Star icon" />
            <h3 className={css.itemTitle}>Професіоналізм та досвід</h3>
            <p className={css.itemDesc}>
              Наш персонал має спеціалізоване навчання та необхідні навички для
              виконання якісних послуг
            </p>
          </li>
          <li className={css.item}>
            <img src={medal} alt="Medal icon" />
            <h3 className={css.itemTitle}>Якість обслуговування</h3>
            <p className={css.itemDesc}>
              Використовуємо професійне обладнання та сучасні методи для
              досягнення найкращих результатів
            </p>
          </li>
          <li className={css.item}>
            <img src={like} alt="Like icon" />
            <h3 className={css.itemTitle}>Індивідуальний підхід</h3>
            <p className={css.itemDesc}>
              Враховуємо потреби кожного клієнта та адаптуємось до різних типів
              приміщень і особливих вимог
            </p>
          </li>
          <li className={css.item}>
            <img src={security} alt="Security icon" />
            <h3 className={css.itemTitle}>Надійність та безпека</h3>
            <p className={css.itemDesc}>
              У нашій безпековій політиці враховані заходи для захисту
              клієнтських нерухомостей та конфіденційності
            </p>
          </li>
          <li className={css.item}>
            <img src={care} alt="Care icon" />
            <h3 className={css.itemTitle}>Прозорість та чесність</h3>
            <p className={css.itemDesc}>
              Ми відкриті до зворотного зв`язку і готові надати детальну
              інформацію про свої послуги та процес роботи
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
