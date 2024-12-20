import Accordion from "./components/accordian/Accordion";
import Drawings from "./components/drawings/Drawings";
import Footer from "./components/footer/Footer";
import Nav from "./components/header/Nav";
import HomePage from "./components/homePageSection/HomePage";
import DesignImg from "./components/Imgsection/DesignImg";
import SliderImg from "./components/slider/SliderImg";

const App = () => {
  return (
    <div>
      <header className="border-b-2 border-gray-50 container mx-auto">
        <Nav />
      </header>
      <main className="container mx-auto max-w-md md:max-w-2xl lg:max-w-screen-2xl p-4 m-4 font-redish !scroll-smooth">
        <section>
          <HomePage />
        </section>
        <section className="text-text-dark m-10">
          <Accordion />
        </section>
        <section className="text-text-dark">
          <DesignImg />
        </section>
        <section>
          <Drawings />
          <SliderImg />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
