import LogoSVG from "../LogoSvg";
import RoundedButton from "../modules/RoundedButton";

export default function Navbar() {
  return (
    <header className="max-w-5xl  mx-auto mt-4 px-1 ">
      <nav className=" flex border rounded-full mx-auto  justify-between p-2.5 ">
        <LogoSVG className="w-16 h-auto" />
        <div className="flex gap-2 items-center">
          <RoundedButton className="border">Get Projects</RoundedButton>
          <RoundedButton className="bg-black text-white">
            Onboard Talent
          </RoundedButton>
        </div>
      </nav>
    </header>
  );
}
