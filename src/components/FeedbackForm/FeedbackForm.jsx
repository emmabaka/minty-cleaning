import { useState } from "react";
import { postData } from "../../api/postData";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import PropTypes from "prop-types";
import FeedbackTitle from "./FeedbackTitle";
import { ThreeDots } from "react-loader-spinner";
import css from "./FeedbackForm.module.css";

const phoneNumberPattern = /^(\+?380|0)\d{9}$/;

const FeedbackForm = ({ title, accent }) => {
  const [mobileError, setMobileError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = e.target.elements.service.value;
    const name = e.target.elements.name.value;
    const mobile = e.target.elements.mobile.value;

    if (
      category === "Default" ||
      name.length < 1 ||
      !phoneNumberPattern.test(mobile)
    ) {
      if (category === "Default") {
        Notify.failure("Оберіть, будь ласка, послугу.");
        setCategoryError(true);
      } else {
        setCategoryError(false);
      }
      if (name.length < 1) {
        Notify.failure("Введіть, будь ласка, ім'я.");
        setNameError(true);
      } else {
        setNameError(false);
      }
      if (!phoneNumberPattern.test(mobile)) {
        Notify.failure("Номер телефону введено в неправильному форматі.");
        setMobileError(true);
      } else {
        setMobileError(false);
      }
    } else {
      setCategoryError(false);
      setNameError(false);
      setMobileError(false);
      setLoad(true);

      const data = {
        category,
        name,
        mobile,
      };

      const res = await postData(data);

      console.log(res);
      if (res.ok) {
        Notify.success("Дякуєм! Незабаром з вами зв'яжуться");
        e.target.elements.service.value = "Default";
        e.target.elements.name.value = "";
        e.target.elements.mobile.value = "";
        setLoad(false);
      } else {
        Notify.failure("Упс, щось пішло не так. Спробуйте ще раз.");
        setLoad(false);
      }
    }
  };

  return (
    <section className={css.feedback}>
      <div className={`${css.feedbackContainer} container`}>
        <FeedbackTitle title={title} accent={accent} />
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <select
            className={
              categoryError ? `${css.select} ${css.error}` : css.select
            }
            name="service"
            defaultValue={"Default"}
            id="service-select"
          >
            <option value="Default" disabled>
              Обрати послугу
            </option>
            <option value="Генеральне прибирання">Генеральне прибирання</option>
            <option value="Регулярне прибирання">Регулярне прибирання</option>
            <option value="Прибирання офісів">Прибирання офісів</option>
            <option value="Прибирання після ремонту">
              Прибирання після ремонту
            </option>
          </select>
          <div className={css.inputWrap}>
            <input
              className={
                nameError ? `${css.nameInput} ${css.error}` : css.nameInput
              }
              type="text"
              name="name"
              placeholder="Ім'я"
            />
            <input
              className={
                mobileError ? `${css.phoneInput} ${css.error}` : css.phoneInput
              }
              type="text"
              name="mobile"
              placeholder="Номер телефону"
            />
          </div>
          {load ? (
            <div className={css.loader}>
              <ThreeDots
                height="50"
                width="60"
                radius="9"
                color="#407bff"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>
          ) : (
            <button className={css.submitBtn} type="submit">
              Замовити
            </button>
          )}
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
