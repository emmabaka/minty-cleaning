import logo from "../../assets/logo-footer.png";
import phone from "../../assets/footer-phone.png";
import instagram from "../../assets/footer-instagram.png";
import telegram from "../../assets/footer-telegram.png";
import line from "../../assets/footer-line.svg";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`${css.footerContainer} container`}>
        <div className={css.logoLinksWrap}>
          <div className={css.logoWrap}>
            <img className={css.logoImg} src={logo} alt="Logo" />
            <span className={css.logoText}>Minty</span>
          </div>
          <ul className={css.linksList}>
            <li className={css.item}>
              <a className={css.link} href="#advantages">
                Чому ми
              </a>
              <a className={css.link} href="#services">
                Наші послуги
              </a>
              <a className={css.link} href="#howWeWork">
                Як ми працюємо
              </a>
            </li>
            <li className={css.item}>
              <a className={css.link} href="#workInclude">
                У роботу входить
              </a>
              <a className={css.link} href="#equipment">
                Обладнання
              </a>
              <a className={css.link} href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className={css.socialLineWrap}>
          <ul className={css.socials}>
            <li>
              <a href="#">
                <img className={css.socialIcons} src={phone} alt="Phone" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={css.socialIcons}
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={css.socialIcons}
                  src={telegram}
                  alt="Telegram"
                />
              </a>
            </li>
          </ul>
          <img className={css.line} src={line} alt="Line" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
