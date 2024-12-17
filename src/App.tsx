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
      <main className="container mx-auto max-w-md md:max-w-4xl lg:max-w-screen-2xl p-4 m-4">
        <section className="">
          <HomePage />
        </section>
        <section className="text-text-dark">
          <DesignImg />
        </section>
        <section>
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
