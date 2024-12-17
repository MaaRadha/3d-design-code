import logo from "/logo_home.png";
import avtarPic from "../../assets/avatar.jpg";
import { Tooltip } from "react-tooltip";
const Nav = () => {
  return (
    <div className="max-w-5xl mx-auto container p-4 mb-4 flex justify-between items-center ">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-16 rounded-lg p-1 backdrop-blur-lg border-2 border-gray-100 "
        />
        <span className="text-sm px-2">Alt fra 3D-design til kode.</span>
      </div>
      <div id="not-clickable">
        <img
          src={avtarPic}
          alt="my profile img "
          className="w-12 rounded-full cursor-pointer"
        />
        <Tooltip
          className=""
          anchorSelect="#not-clickable"
          place="bottom"
          content="Hei 😊! Jeg heter Rohit. Se mer informasjon i footer. Jeg har kompetanse innen design og utvikling. Send meg gjerne en e-post eller ring!"
        />
      </div>
    </div>
  );
};

export default Nav;
