import mainImg from "../../assets/nanestad-min.jpg";
import { motion } from "framer-motion";
import film from "../../assets/film/movi.mp4";
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
          <p className="text-xl w-full max-w-sm p-4 text-center">
            Design utvikler kreative løsninger innen konseptutvikling,
            3D-visualisering
          </p>
        </div>
        <div className="p-1 ">
          <img
            className="shadow-[-26px_25px_2px_8px_#f7efe6] max-w-6xl w-full p-2 rounded-2xl object-contain transform hover:scale-105 transition-transform duration-300"
            src={mainImg}
            alt="image of a 3d swimming pool with lights and water"
          />
        </div>
      </motion.div>
      <motion.div
        className="py-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "linear",
        }}
      >
        <div className="py-10 rounded-lg ">
          <video
            controls
            preload="loading"
            className="w-full max-w-4xl rounded-lg shadow-[26px_25px_2px_8px_#f7efe6] p-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer" // Tailwind styling for width
            // poster="/path/to/your/thumbnail.jpg" // Optional: Add a poster image for the video
          >
            <source src={film} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
