import "./App.css";
import About from "./components/About/About";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeedbackForm />
      <About />
    </>
  );
}

export default App;
