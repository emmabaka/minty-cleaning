import hero from "../../assets/hero.png";
import heroDesktop from "../../assets/hero1x.png";
import heroMonitor from "../../assets/hero2x.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import css from "./Hero.module.css";

const Hero = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 1339px)");
  const isDesktop = useMediaQuery(
    "only screen and (min-width : 1339px) and (max-width : 1649px)"
  );
  const isMonitor = useMediaQuery("only screen and (min-width : 1649px)");
  return (
    <section className={css.hero}>
      <div className={`${css.heroWrap} container`}>
        <h1 className={css.title}>
          Відпустіть турботи,{" "}
          <span className="accent">довірте прибирання професіоналам!</span>
        </h1>
        {isMobile && <img className={css.img} src={hero} alt="Hero image" />}
        {isDesktop && (
          <img className={css.img} src={heroDesktop} alt="Hero image" />
        )}
        {isMonitor && (
          <img className={css.img} src={heroMonitor} alt="Hero image" />
        )}
      </div>
    </section>
  );
};

export default Hero;
