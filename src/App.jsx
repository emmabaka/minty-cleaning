import { useMediaQuery } from "@uidotdev/usehooks";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Equipment from "./components/Equipment/Equipment";
import ExtraServices from "./components/ExtraServices/ExtraServices";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import Questions from "./components/Questions/Questions";
import Services from "./components/Services/Services";
import WorkInclude from "./components/WorkInclude/WorkInclude";

function App() {
  const isMobile = useMediaQuery("only screen and (max-width : 720px)");

  return (
    <>
      <Header />
      <Hero />
      <FeedbackForm title={["Консультація?"]} accent="Звісно!" />
      <About />
      <Advantages />
      <Services />
      <ExtraServices />
      {!isMobile && (
        <FeedbackForm title={["Легко", "онлайн"]} accent="замовте послугу " />
      )}
      <HowWeWork />
      <WorkInclude />
      {isMobile && (
        <FeedbackForm title={["Легко", "онлайн"]} accent="замовте послугу " />
      )}
      <Questions />
      <Equipment />
      <Footer />
    </>
  );
}

export default App;
