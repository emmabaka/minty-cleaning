import "./App.css";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeedbackForm />
      <About />
      <Advantages />
      <Services />
    </>
  );
}

export default App;
