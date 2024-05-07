import Navbar from "../components/Common/Navbar";
import Form from "../components/Resgistration/Form";

export default function RegistrationForm() {
  return (
    <>
      <main className="flex flex-col items-baseline w-full  h-screen ">
        <Navbar />
        <section className="flex-grow grid place-content-center w-full">
          <div className="flex flex-col items-center">
            <div className="font-CoverByYourGrace text-center text-[#2DA950] text-lg">
              Registration Form
            </div>
            <div className="w-56 font-ManRope font-semibold text-center text-2xl">
              <span>Start your success Journey here!</span>
            </div>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
}
