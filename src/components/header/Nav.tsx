import logo from "/logo_home.png";
const Nav = () => {
  return (
    <div className="max-w-5xl mx-auto container p-4 mb-4 ">
      <div className="flex justify-center items-end ">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-20 rounded-lg p-1 backdrop-blur-lg border-2 border-gray-100 "
        />
        <span className="font-bold px-2"> 3D Work by Me </span>
      </div>
    </div>
  );
};

export default Nav;
