import reactIcon from "../../assets/icons/react.png";
import tailwindIcon from "../../assets/icons/tailwindcss.png";
import vite from "../../assets/icons/vite.png";
import typescriptIcon from "../../assets/icons/Vectortypescript.png";
const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="py-8 px-4 bg-bg-gray">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-lg font-semibold">
            &copy; 2024 Rohit Kumar Amdahl.
          </p>
          <div className="space-y-2">
            <p className="text-md">Kontakt meg:</p>
            <div className="flex flex-wrap items-center justify-center space-x-4">
              <a href="mailto:omyoga2016@outlook.com" className=" underline">
                omyoga2016@outlook.com
              </a>
              <span>|</span>
              <a href="mailto:rohit_designer@outlook.com" className="underline">
                rohit_designer@outlook.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-md">
              Telefon:
              <a href="tel:+4740538464" className="underline">
                +47 405 38 464
              </a>
            </p>
            <p className="text-lg">Denne nettsiden er utviklet av meg :</p>
            <ul className="flex justify-center space-x-4 py-3 ">
              <li>
                <img className="w-8" src={vite} alt="vite icons" />
              </li>
              <li>
                <img className="w-8" src={reactIcon} alt="react icon" />
              </li>
              <li>
                <img
                  className="w-8"
                  src={typescriptIcon}
                  alt="type script icon"
                />
              </li>
              <li>
                <img
                  className="w-8"
                  src={tailwindIcon}
                  alt=" tailwind css icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
