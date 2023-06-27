import hero from "../../assets/hero.png";
import heroDesktop from "../../assets/hero-desktop.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import css from "./Hero.module.css";

const Hero = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1339px)");
  return (
    <section className={css.hero}>
      <div className={`${css.heroWrap} container`}>
        <h1 className={css.title}>
          Відпустіть турботи,{" "}
          <span className="accent">довірте прибирання професіоналам!</span>
        </h1>
        <img
          className={css.img}
          src={isDesktop ? heroDesktop : hero}
          alt="Hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
