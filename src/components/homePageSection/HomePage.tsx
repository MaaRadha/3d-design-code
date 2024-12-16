import mainImg from "../../assets/basseng_1.jpg";
const HomePage = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-2 items-center text-text-dark">
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
    </div>
  );
};

export default HomePage;
