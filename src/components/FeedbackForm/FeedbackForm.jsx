import css from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  return (
    <section className={css.feedback}>
      <div className={`${css.feedbackContainer} container`}>
        <h2 className={css.title}>
          Консультація? <span className="accent">Звісно!</span>
        </h2>
        <form className={css.form} method="post" action="/send-mail">
          <select className={css.select} name="service" id="service-select">
            <option value="0" disabled selected>
              Обрати послугу
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <div className={css.inputWrap}>
            <input
              className={css.nameInput}
              type="text"
              name="name"
              placeholder="Ім'я"
            />
            <input
              className={css.phoneInput}
              type="text"
              name="phone"
              placeholder="Номер телефону"
            />
          </div>
          <button className={css.submitBtn} type="submit">
            Замовити
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
