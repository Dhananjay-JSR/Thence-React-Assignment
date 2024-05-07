import { Link } from "react-router-dom";
import LogoSVG from "../LogoSvg";
import CrossTickSvg from "../modules/svg/BlackCross";

export default function Navbar() {
  return (
    <header className="max-w-5xl  w-full  mx-auto mt-4 px-1 ">
      <nav className=" flex  rounded-full mx-auto  justify-between p-2.5 ">
        <LogoSVG className="w-16 h-auto" />
        <Link to={"/"} className="rounded-full p-2 border">
          <CrossTickSvg />
        </Link>
      </nav>
    </header>
  );
}
