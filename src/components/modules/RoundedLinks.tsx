import { cn } from "../../utils/lib";
import { Link, LinkProps } from "react-router-dom";

export default function RoundedLink({
  className,
  children,
  ...rest
}: LinkProps) {
  return (
    <Link
      {...rest}
      className={cn("rounded-full py-3.5 px-5 text-xs font-ManRope", className)}
    >
      {children}
    </Link>
  );
}
