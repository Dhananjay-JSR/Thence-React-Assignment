export default function Footer() {
  return (
    <footer className="max-w-5xl px-1 py-1 mx-auto  mt-8 mb-6">
      <nav className="flex max-lg:flex-col max-lg:gap-4 justify-between font-ManRope px-6 text-[#1C1C1C] bg-[#F5F5F5] py-8 rounded-3xl">
        <div className="font-medium">© Talup 2023. All rights reserved</div>
        <div className="flex gap-12 ">
          <a href="/" className="underline">
            Terms & Conditions
          </a>
          <a href="/" className="underline">
            Privacy Policy
          </a>
        </div>
      </nav>
    </footer>
  );
}
