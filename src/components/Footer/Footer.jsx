import { scroll } from "../../utils/scroll";
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
              <a
                className={css.link}
                href="#advantages"
                onClick={(e) => scroll(e, "advantages")}
              >
                Чому ми
              </a>
              <a
                className={css.link}
                href="#services"
                onClick={(e) => scroll(e, "services")}
              >
                Наші послуги
              </a>
              <a
                className={css.link}
                href="#howWeWork"
                onClick={(e) => scroll(e, "howWeWork")}
              >
                Як ми працюємо
              </a>
            </li>
            <li className={css.item}>
              <a
                className={css.link}
                href="#workInclude"
                onClick={(e) => scroll(e, "workInclude")}
              >
                У роботу входить
              </a>
              <a
                className={css.link}
                href="#equipment"
                onClick={(e) => scroll(e, "equipment")}
              >
                Обладнання
              </a>
              <a
                className={css.link}
                href="#questions"
                onClick={(e) => scroll(e, "questions")}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className={css.socialLineWrap}>
          <ul className={css.socials}>
            <li>
              <a href="tel:+380679843298">
                <img className={css.socialIcons} src={phone} alt="Phone" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/minty_cleaning?igshid=OGIzYTJhMTRmYQ=="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={css.socialIcons}
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/minty_clean"
                target="_blank"
                rel="noreferrer"
              >
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
