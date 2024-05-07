import React from "react";
import { cn } from "../utils/lib";
import EmailCrossSvg from "../components/modules/svg/EmailCrossSvg";
import Navbar from "../components/Common/Navbar";
import Input from "../components/modules/Input";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const router = useNavigate();
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
            <section className="w-80 mt-10 ">
              <div className="grid gap-6">
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter your name"
                  type="text"
                />
                <div>
                  <Input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter  your email"
                    type="email"
                  />
                  <div
                    className={cn(
                      "flex items-center mt-2 text-sm text-[#FF0808]",
                      isEmailValid ? "invisible" : "visible"
                    )}
                  >
                    <EmailCrossSvg />
                    <span>Enter a valid email address</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  const isValidEmail =
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                  if (!isValidEmail.test(email)) {
                    setIsEmailValid(false);
                    return;
                  } else {
                    router("/submit");
                  }
                }}
                disabled={name === "" || email === ""}
                className="bg-[#1C1C1C] disabled:bg-[#C9C9C9]  disabled:text-[#FFFFFF] px-4 py-3 w-full rounded-3xl mt-10 text-white"
              >
                Submit
              </button>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
