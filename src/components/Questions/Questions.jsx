import css from "./Questions.module.css";

const Questions = () => {
  return (
    <section className={css.questions}>
      <div className="container">
        <h2 className={css.title}>Поширені запитання</h2>

        <div className={css.wrap}>
          <ul className={css.dialogWrap}>
            <li className={css.dialogItem1}>Як мені замовити послугу?</li>
            <li className={css.dialogItemAccent1}>
              Оберіть цікаву вам послугу, заповніть форму на сайті, або
              зв’яжіться з нами через Instagram чи Telegram, і протягом 20
              хвилин вам зателефонує наш менеджер для підтвердження заявки. З
              ним ви зможете обговорити всі деталі та домовитися про дату.
            </li>
            <li className={css.dialogItem2}>
              Чим відрізняється генеральне прибирання від регулярного?
            </li>
            <li className={css.dialogItemAccent2}>
              Генеральне прибирання - це регулярне прибирання зі всіма
              додатковими послугами.
            </li>
            <li className={css.dialogItem3}>
              Де гарантії, що в мене нічого не вкрадуть?
            </li>
            <li className={css.dialogItemAccent3}>
              Не хвилюйтесь! Кожний співробітник проходить перевірку, надаючи
              нам копії своїх документів.
            </li>
            <li className={css.dialogItem4}>Як відбувається оплата?</li>
            <li className={css.dialogItemAccent4}>
              Для гарантії якості, ми беремо першу половину вартості послуги
              перед прибиранням і другу половину після.
            </li>
            <li className={css.dialogItem5}>
              Чи є можливість замовити лише додаткову послугу?
            </li>
            <li className={css.dialogItemAccent5}>
              Звичайно! Ви можете звернутися до нас щодо миття вікон або навіть
              організування порядку в холодильнику.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Questions;
