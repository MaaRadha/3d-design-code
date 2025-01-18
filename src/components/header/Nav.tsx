import avtarPic from "../../assets/avatar.jpg";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  return (
    <nav>
      <div className="max-w-5xl mx-auto container p-4 mb-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <span className="text-sm px-2 font-serif font-bold">
            3D-design til kode.
          </span>
        </div>

        {/* Avatar with Tooltip */}
        <div id="not-clickable" className="relative">
          <img
            src={avtarPic}
            alt="my profile img"
            className="w-12 rounded-full cursor-pointer"
          />
          <Tooltip
            anchorSelect="#not-clickable"
            place="bottom"
            className="bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg"
            content="Hei😊 !Se mer informasjon i footer!"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
