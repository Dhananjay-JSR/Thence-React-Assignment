import { ClassValue } from "clsx";
import { cn } from "../../utils/lib";

export default function RoundedButton({
  className,
  children,
  ...rest
}: React.ComponentProps<"button"> & {
  className?: ClassValue;
  children: React.ReactNode;
}) {
  return (
    <button
      {...rest}
      className={cn("rounded-full py-3.5 px-5 text-xs font-ManRope", className)}
    >
      {children}
    </button>
  );
}
