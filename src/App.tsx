import Footer from "./components/footer/Footer";
import Nav from "./components/header/Nav";
import HomePage from "./components/homePageSection/HomePage";

const App = () => {
  return (
    <div>
      <header className="border-b-2 border-gray-50 container mx-auto">
        <Nav />
      </header>
      <main className="container mx-auto max-w-md md:max-w-4xl lg:max-w-screen-2xl p-4 m-4">
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
