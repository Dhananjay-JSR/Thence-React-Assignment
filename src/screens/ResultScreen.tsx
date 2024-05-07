import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Common/Navbar";
import GreenTick from "../components/modules/svg/GreenTick";

export default function ResultScreen() {
  const router = useNavigate();

  const viewNavigate = (newRoute: string) => {
    if (!document.startViewTransition) {
      return router(newRoute);
    } else {
      return document.startViewTransition(() => {
        router(newRoute);
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      viewNavigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <main className="flex flex-col items-baseline w-full  h-screen ">
        <Navbar />
        <section className="flex-grow grid place-content-center w-full">
          <div className="flex items-center flex-col">
            <GreenTick />
            <div className="font-CoverByYourGrace mt-8 text-[#2DA950] text-3xl">
              Success Submitted
            </div>
            <div className="text-5xl font-ManRope font-semibold mt-4">
              Congratulations
            </div>
            <div className="w-96 text-center text-[#727272]  font-ManRope font-medium mt-4">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </div>
          </div>
        </section>
        <footer className="font-ManRope text-center w-full mb-8">
          <nav className="text-[#727272]">
            Redirecting you to Homepage in{" "}
            <span className="font-bold text-[#1C1C1C]">5 Seconds</span>
          </nav>
        </footer>
      </main>
    </>
  );
}
