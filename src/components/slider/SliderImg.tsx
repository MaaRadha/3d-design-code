import { Carousel } from "react-responsive-carousel";
import { pictures } from "../../helpers/pic";

const SliderImg = () => {
  return (
    <div className=" lg:ring-1 carousel-container w-full max-w-7xl mx-auto p-5 shadow-[-10px_5px_2px_8px_#f7efe6] rounded-xl ">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        interval={3000}
        transitionTime={600}
        className="custom-carousel"
      >
        {pictures.map((item) => (
          <div key={item.id} className="slider-item relative group">
            <img
              src={item.pic}
              alt={`Slider ${item.name}`}
              className="w-full max-h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white py-2 px-4 rounded-lg duration-300 backdrop-blur-lg">
              <p className="text-sm p-2">{item.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderImg;
