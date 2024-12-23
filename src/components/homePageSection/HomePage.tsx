import mainImg from "../../assets/nanestad-min.jpg";
import { motion } from "framer-motion";
import film from "../../assets/film/movi.mp4";
import { BsArrowDownCircle } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import poster from "../../assets/poster.jpg";
const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "linear",
        }}
        className="grid lg:grid-cols-2 gap-2 items-center text-text-dark"
      >
        <div className="flex flex-col items-center z-10">
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-center drop-shadow-xl pb-2">
            Design som skaper inntrykk
          </h1>
          <p className="text-lg w-full p-4">
            Design utvikler kreative løsninger innen konseptutvikling og
            3D-visualisering, i tillegg til å være utvikler med kompetanse innen
            frontend-utvikling og .NET.
          </p>
          <div className="flex justify-center items-center py-6 my-4">
            <span className="animate-bounce">
              <BsArrowDownCircle size={35} color="#9d855e" />
            </span>
          </div>
          <div className="pb-4">
            <a
              href="mailto:rohit_designer@outlook.com"
              className="px-4 py-2 rounded-full flex items-center gap-2 text-slate-500 shadow-[3px_2px_2px_2px_#f7efe6] transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500"
            >
              <FiSend />
              <span>Send meg e-post</span>
            </a>
          </div>
        </div>
        <div className="p-1">
          <img
            className="shadow-[-10px_5px_2px_8px_#f7efe6] max-w-6xl w-full p-2 rounded-2xl object-contain transform hover:scale-105 transition-transform duration-300"
            src={mainImg}
            alt="image of a 3d swimming pool with lights and water"
          />
        </div>
      </motion.div>
      <motion.div
        className="py-8 grid lg:grid-cols-2 gap-2 items-center text-text-dark"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "linear",
        }}
      >
        <div className=" py-10 rounded-lg">
          <video
            controls
            preload="loading"
            poster={poster}
            className="w-full max-w-4xl rounded-2xl shadow-[10px_5px_2px_8px_#f7efe6] p-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <source src={film} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:p-10 md:p-6 p-4 z-20">
          <p className="text-lg">
            Jeg har bakgrunn som 3D-artist, BIM-tekniker og teknisk tegner, med
            bred erfaring i bruk av programvare som Archicad, Autocad, Revit,
            Solibri, Enscape og Twinmotion for å levere profesjonelle og
            kreative løsninger. Jeg har også jobbet i team på komplekse
            prosjekter, der jeg har bidratt med tekniske tegninger og
            3D-visualiseringer som støtter helheten i prosjektene. <br />I
            tillegg har jeg opparbeidet meg kompetanse innen frontend- og
            backend-utvikling, med fokus på moderne teknologi og brukervennlige
            løsninger. Denne kombinasjonen av design, teknisk tegning og
            teknologi gjør at jeg kan finne gode løsninger og bidra med nye
            ideer. Jeg er alltid motivert for å lære nye verktøy og metoder som
            kan forbedre prosesser og leveranser."
          </p>
          <p className="text-lg text-end">- Rohit Kumar Amdhal</p>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
