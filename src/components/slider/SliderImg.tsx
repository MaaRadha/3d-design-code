import { Carousel } from "react-responsive-carousel";
import { pictures } from "../../helpers/pic";

const SliderImg = () => {
  return (
    <div className=" lg:ring-1 carousel-container w-full max-w-7xl mx-auto p-5 shadow-[-10px_5px_2px_8px_#f7efe6] rounded-xl ">
      <Carousel
        showArrows={true}
        autoPlay={false}
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
            <p className="text-lg text-semibold p-4 m-1">{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderImg;
