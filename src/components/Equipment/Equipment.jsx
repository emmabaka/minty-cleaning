import vacuumCleaner from "../../assets/vacuum-cleaner.png";
import steamCleaner from "../../assets/steam-cleaner.png";
import windshieldWiper from "../../assets/windshield-wiper.png";
import bottle1 from "../../assets/bottle1.png";
import bottle2 from "../../assets/bottle2.png";
import css from "./Equipment.module.css";

const Equipment = () => {
  return (
    <section className={css.equipment}>
      <div className="container">
        <h2 className={css.title}>Обладнання</h2>
        <ul className={css.equipmentList}>
          <li className={css.equipmentItem}>
            <img
              className={css.vacuumCleaner}
              src={vacuumCleaner}
              alt="Vacuum cleaner"
            />
            <p className={css.equipmentName}>Пилосос WD 3 V-17/4/20</p>
            <p className={css.equipmentDesc}>
              Це пилосос з опцією зміни операцій вологого та сухого прибирання
              без заміни фільтра. Функція видування полегшує очищення
              важкодоступних місць, що робить прибирання швидшим.
            </p>
          </li>
          <li className={css.equipmentItem}>
            <img
              className={css.steamCleaner}
              src={steamCleaner}
              alt="Steam cleaner"
            />
            <p className={css.equipmentName}>Пароочисник SC 2 EasyFix</p>
            <p className={css.equipmentDesc}>
              Цей пароочисник очищує всі тверді поверхні в будинку без хімічних
              засобів. Він видаляє стійкі забруднення і жирові плями, а також
              усуває 99,99% відомих побутових бактерій.
            </p>
          </li>
          <li className={css.equipmentItem}>
            <img
              className={css.windshieldWiper}
              src={windshieldWiper}
              alt="Windshield wiper"
            />
            <p className={css.equipmentName}>Віконний пилосос WV 2</p>
            <p className={css.equipmentDesc}>
              Це віконний пилосос, який гарантує бездоганну чистоту ваших вікон
              і інших гладких поверхонь. Він оснащений ефективним всмоктуванням,
              яке збирає бруд і воду без будь-яких підтікань і розводів.
            </p>
          </li>
        </ul>
        <h2 className={css.title}>Побутова хімія</h2>
        <ul className={css.chemicalList}>
          <li className={css.chemicalItem}>
            <img className={css.bottle1} src={bottle1} alt="FloorPro CA 50 C" />
            <p className={css.chemicalName}>Миючий засіб FloorPro CA 50 C</p>
            <p className={css.chemicalDesc}>
              Універсальний миючий засіб для очищення підлоги, який забезпечує
              тривалий захист від бруду. Має приємний цитрусовий аромат і
              відповідає європейським екологічним стандартам.
            </p>
          </li>
          <li className={css.chemicalItem}>
            <img className={css.bottle2} src={bottle2} alt="CA 30 C" />
            <p className={css.chemicalName}>
              Засіб для очищення поверхонь CA 30 C
            </p>
            <p className={css.chemicalDesc}>
              Ефективно видаляє залишки їжі, жирові забруднення, табакові осади
              та плями кави, не залишаючи розводів навіть на блискучих
              поверхнях. Має приємний цитрусовий аромат і відповідає
              європейським екологічним стандартам.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Equipment;
