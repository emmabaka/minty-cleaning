import css from "./FeedbackForm.module.css";
import FeedbackTitle from "./FeedbackTitle";
import PropTypes from "prop-types";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const FeedbackForm = ({ title, accent }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      category: e.target.elements.service.value,
      name: e.target.elements.name.value,
      mobile: e.target.elements.mobile.value,
    };

    console.log(data);
    console.log(JSON.stringify(data));
    const res = await fetch(
      "https://minty-back.onrender.com/api/v1/mail-send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(res);
    if (res.ok) {
      Notify.success("Message sent successfully!");
    } else {
      Notify.failure("Error. Try again, please");
    }
  };

  return (
    <section className={css.feedback}>
      <div className={`${css.feedbackContainer} container`}>
        <FeedbackTitle title={title} accent={accent} />
        <form
          className={css.form}
          onSubmit={handleSubmit}
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
              pattern="/^[A-Za-z]+$/"
            />
            <input
              className={css.phoneInput}
              type="text"
              name="mobile"
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

FeedbackForm.propTypes = {
  title: PropTypes.array.isRequired,
  accent: PropTypes.string.isRequired,
};

export default FeedbackForm;
