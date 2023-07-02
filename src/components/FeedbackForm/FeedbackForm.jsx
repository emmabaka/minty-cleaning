import css from "./FeedbackForm.module.css";
import FeedbackTitle from "./FeedbackTitle";
const API_URL = import.meta.env.VITE_API_URL;
import PropTypes from 'prop-types';
const FeedbackForm = ({ title, accent }) => {
  return (
    <section className={css.feedback}>
      <div className={`${css.feedbackContainer} container`}>
        <FeedbackTitle title={title} accent={accent} />
        <form
          className={css.form}
          method="post"
          action={`${API_URL}/send-mail`}
        >
          <select
            className={css.select}
            name="service"
            defaultValue={"Default"}
            id="service-select"
          >
            <option value="Default" disabled>
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

FeedbackForm.propTypes ={
  title: PropTypes.array.isRequired,
  accent: PropTypes.string.isRequired
}

export default FeedbackForm;
