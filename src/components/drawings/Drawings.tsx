import { drawings } from "../../helpers/drawins";
const Drawings = () => {
  return (
    <div className="py-6 my-4 ">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4 ">
        {drawings.map((item) => (
          <div key={item.id} className=" p-8">
            <img
              className="w-full rounded-lg shadow-[5px_5px_2px_3px_#f7efe6] transform hover:scale-105 transition-transform duration-300 ease-in-out p-8"
              src={item.src}
              alt={item.alt}
            />
            <div className="text-center text-lg py-8 m-2">
              <span className="p-4">{item.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawings;
