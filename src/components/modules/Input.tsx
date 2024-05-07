export default function Input({
  className,
  ...rest
}: React.ComponentProps<"input">) {
  return (
    <input
      className={`bg-[#EFEFEF] w-full rounded-3xl placeholder:text-[#827A7A]  py-3 px-4 font-ManRope  font-medium ${className}`}
      {...rest}
    />
  );
}
