import { ClassValue } from "clsx";
import { cn } from "../../utils/lib";

export default function RoundedButton({
  className,
  children,
}: {
  className?: ClassValue;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={cn("rounded-full py-3.5 px-5 text-xs font-ManRope", className)}
    >
      {children}
    </button>
  );
}
