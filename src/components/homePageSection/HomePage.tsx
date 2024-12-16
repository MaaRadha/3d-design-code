import mainImg from "../../assets/nanestad-min.jpg";
import { motion } from "framer-motion";
import film from "../../assets/film/movi.mp4";
import { BsArrowDownCircle } from "react-icons/bs";
import { icons } from "../../helpers/Icons";
import { Tooltip } from "react-tooltip";
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
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-center drop-shadow-xl">
            Design som skaper inntrykk
          </h1>
          <p className="text-lg w-full max-w-sm p-4 text-center">
            Design utvikler kreative løsninger innen konseptutvikling,
            3D-visualisering
          </p>
          <div className="flex justify-center items-center gap-6">
            {icons.map((icon) => (
              <div
                key={icon.Id}
                className="relative flex justify-center items-center py-6 my-4"
              >
                <span id={`tooltip-${icon.Id}`}>
                  <img
                    src={icon.pic}
                    alt={icon.name}
                    className="w-10 shadow-md shadow-gray-500/50 p-2"
                  />
                  <Tooltip
                    className="capitalize text-sm"
                    anchorSelect={`#tooltip-${icon.Id}`}
                    place="top"
                  >
                    {icon.name}
                  </Tooltip>
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center py-6 my-4">
            <span className="animate-bounce">
              <BsArrowDownCircle size={35} color="#9d855e" />
            </span>
          </div>
        </div>
        <div className="p-1">
          <img
            className="shadow-[-26px_25px_2px_8px_#f7efe6] max-w-6xl w-full p-2 rounded-2xl object-contain transform hover:scale-105 transition-transform duration-300"
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
        <div className=" py-10 rounded-lg ">
          <video
            controls
            preload="loading"
            className="w-full max-w-4xl rounded-lg shadow-[26px_25px_2px_8px_#f7efe6] p-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer" // Tailwind styling for width
          >
            <source src={film} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-10 z-20 font-semibold">
          <p className="text-lg">
            Jeg har tidligere jobbet som 3D-artist, BIM-tekniker og teknisk
            tegner, der jeg brukte programvare som Archicad, Autocad, Revit,
            Solibri, Enscape og Twinmotion for å levere profesjonelle og
            kreative løsninger. I dag arbeider jeg som både frontend- og
            backend-utvikler, med fokus på moderne teknologi og brukervennlige
            løsninger. Min erfaring fra design- og teknologiindustrien gir meg
            en unik forståelse for hvordan design og utvikling kan skape
            inntrykk og verdi.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
