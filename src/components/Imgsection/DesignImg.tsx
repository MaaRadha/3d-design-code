import bygg from "../../assets/bygg.png";
import { icons } from "../../helpers/icons";
import { Tooltip } from "react-tooltip";

const DesignImg = () => {
  return (
    <div className="text-text-dark py-6 my-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col p-3 z-10 ">
          <h2 className="py-10 text-2xl md:text-4xl lg:text-5xl text-center drop-shadow-xl ">
            3D visualisering og Teknisk tegning galleri
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Disse prosjektene reflekterer min erfaring innen teknisk tegning og
            3D-design, både fra arbeid i ledende arkitektfirmaer og som
            frilanser under koronapandemien.
          </p>
          <ul className="mt-4 text-lg text-gray-600">
            <li>Enerhaugen Arkitektkontor AS</li>
            <li>Spinn Arkitekter AS</li>
            <li>Scenario Interiørarkitekter AS</li>
            <li>Hille Melbye Arkitekter AS</li>
          </ul>
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
                    className="w-10 shadow-md shadow-gray-500/50 p-1"
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
        </div>
        <div className=" flex justify-center items-center">
          <img
            className=" w-full p-1 mx-auto rounded-2xl shadow-[-10px_5px_2px_8px_#f7efe6] transform hover:scale-105 transition-transform duration-300"
            src={bygg}
            alt=" 3d visualisering av bygninger"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignImg;
