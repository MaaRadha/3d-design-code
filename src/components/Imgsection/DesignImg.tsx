import frame from "../../assets/frame_1.jpg";
const DesignImg = () => {
  return (
    <div className="text-text-dark py-6 my-4 ">
      <h2 className="text-center text-4xl py-10 ">
        3D visualisering og Teknisk tegning galleri:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#f7efe6] p-10 rounded-2xl shadow-2xl">
        <div className="col-span-2 ">
          <img
            className="w-full p-1 mx-auto"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
        <div className="col-span-2 ">
          <img
            className="w-full p-1 mx-auto"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
        <div>
          <img
            className="w-full p-1 mx-auto"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
        <div>
          <img
            className="w-full p-1 mx-auto"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
        <div>
          <img
            className="object-cover p-1 mx-auto"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
        <div>
          <img
            className="object-cover p-1 mx-auto"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
        <div className="col-span-2">
          <img
            className="object-cover"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
        <div className="col-span-2">
          <img
            className="w-full p-1 mx-auto"
            src={frame}
            alt=" 3d visualisering av bygninger"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignImg;
