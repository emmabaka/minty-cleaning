import css from "./Services.module.css";

const Services = () => {
  return (
    <section className={css.services}>
      <div className="container">
        <h2 className={css.title}>Детальніше про послуги</h2>
        <div className={css.tableWrap}>
          <ul className={`${css.table} ${css.general}`}>
            <li>
              <h3 className={css.tableTitle}>Генеральне прибирання</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>1 кімнатна квартира</span>
              <span className={css.servicePrice}>від 35 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>2 кімнатна квартира</span>
              <span className={css.servicePrice}>від 35 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>3 кімнатна квартира</span>
              <span className={css.servicePrice}>від 35 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Будинок</span>
              <span className={css.servicePrice}>від 35 грн/м2</span>
            </li>
          </ul>
          <ul className={`${css.table} ${css.regular}`}>
            <li>
              <h3 className={css.tableTitle}>Регулярне прибирання</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>1 кімнатна квартира</span>
              <span className={css.servicePrice}>від 35 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>2 кімнатна квартира</span>
              <span className={css.servicePrice}>від 35 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>3 кімнатна квартира</span>
              <span className={css.servicePrice}>від 3000 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Будинок</span>
              <span className={css.servicePrice}>від 40 грн/м2</span>
            </li>
          </ul>
          <ul className={`${css.table} ${css.office}`}>
            <li>
              <h3 className={css.tableTitle}>Прибирання офісів</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>До 50 м2</span>
              <span className={css.servicePrice}>від 25 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>До 60 м2</span>
              <span className={css.servicePrice}>від 23 грн/м2</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Від 60 м2</span>
              <span className={css.servicePrice}>від 21 грн/м2</span>
            </li>
          </ul>
          <ul className={`${css.table} ${css.repair}`}>
            <li>
              <h3 className={css.tableTitle}>Прибирання після ремонту</h3>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>1 кімнатна квартира</span>
              <span className={css.servicePrice}>від 2400 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>2 кімнатна квартира</span>
              <span className={css.servicePrice}>від 3000 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>3 кімнатна квартира</span>
              <span className={css.servicePrice}>від 3000 грн</span>
            </li>
            <li className={css.tableItem}>
              <span className={css.serviceName}>Будинок</span>
              <span className={css.servicePrice}>від 80 грн/м2</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
