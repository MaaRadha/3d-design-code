import { drawings } from "../../helpers/drawins";
const Drawings = () => {
  return (
    <div className="py-6 my-4 ">
      <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-4 ">
        {drawings.map((item) => (
          <div key={item.id} className=" p-4">
            <img
              className="w-full rounded-lg shadow-[5px_5px_2px_3px_#f7efe6] transform hover:scale-105 transition-transform duration-300 p-1"
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawings;
