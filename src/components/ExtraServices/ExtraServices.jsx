import woman from "../../assets/extra-services-woman.png";
import line from "../../assets/extra-services-line.svg";
import css from "./ExtraServices.module.css";

const ExtraServices = () => {
  return (
    <section className={css.extraServices}>
      <div className="container">
        <div className={css.wrap}>
          <img src={woman} alt="Woman" className={css.womanImg} />
          <div className={css.dialogWrap}>
            <p className={css.text}>
              Як щодо <span className={css.boldText}>додаткових послуг</span>?
              Можливо це саме те, що вам потрібно!
            </p>
            <img src={line} alt="Line" className={css.line} />
          </div>
        </div>
        <h2 className={css.title}>Додаткові послуги</h2>
        <div className={css.tableWrap}>
          <ul className={css.table}>
            <li>
              <h3 className={css.tableTitle}>Вікна</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Сезонна</span>
              <span className={css.servicePrice}>від 35 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Ген. прибирання</span>
              <span className={css.servicePrice}>від 40 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Після ремонту</span>
              <span className={css.servicePrice}>від 45 грн/м2</span>
            </li>
          </ul>
          <ul className={css.table}>
            <li>
              <h3 className={css.tableTitle}>Кухонні предмети</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Піч</span>
              <span className={css.servicePrice}>від 250 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Мікрохвильова піч</span>
              <span className={css.servicePrice}>від 100 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Холодильник (всередині)</span>
              <span className={css.servicePrice}>від 250 грн</span>
            </li>
          </ul>
          <ul className={css.table}>
            <li>
              <h3 className={css.tableTitle}>Кімнати</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Прасування</span>
              <span className={css.servicePrice}>від 100 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Зміна постільної білизни</span>
              <span className={css.servicePrice}>50 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Гіпоалергенне прибирання</span>
              <span className={css.servicePrice}>від 350 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Чищення килимів</span>
              <span className={css.servicePrice}>від 30/м2 грн</span>
            </li>
          </ul>
          <ul className={css.table}>
            <li>
              <h3 className={css.tableTitle}>Додаткові приміщення</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Балкон</span>
              <span className={css.servicePrice}>від 150 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Комора</span>
              <span className={css.servicePrice}>від 150 грн</span>
            </li>
          </ul>
          <ul className={css.table}>
            <li>
              <h3 className={css.tableTitle}>Особисті побажання</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>
                Розкласти речі за кольором
              </span>
              <span className={css.servicePrice}>від 20 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Заїхати за ключами</span>
              <span className={css.servicePrice}>від 100 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Полити всі квіти</span>
              <span className={css.servicePrice}>від 30 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Все, що буде вам корисно</span>
              <span className={css.servicePrice}>від 20 грн</span>
            </li>
          </ul>
        </div>
        <p className={css.hint}>*уточніть послугу, телефонуючи нам</p>
      </div>
    </section>
  );
};

export default ExtraServices;
