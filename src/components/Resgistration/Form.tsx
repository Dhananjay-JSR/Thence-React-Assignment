import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/lib";
import Input from "../modules/Input";
import EmailCrossSvg from "../modules/svg/EmailCrossSvg";

export default function Form() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const router = useNavigate();
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!isValidEmail.test(email)) {
          setIsEmailValid(false);
          return;
        } else {
          router("/submit");
        }
      }}
      className="w-80 mt-10 "
    >
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
        type="submit"
        disabled={name === "" || email === ""}
        className="bg-[#1C1C1C] disabled:bg-[#C9C9C9]  disabled:text-[#FFFFFF] px-4 py-3 w-full rounded-3xl mt-10 text-white"
      >
        Submit
      </button>
    </form>
  );
}
