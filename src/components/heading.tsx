import { cva } from "class-variance-authority";
import { prociono } from "@/lib/fonts";
import { Slot } from "@radix-ui/react-slot";

const headingStyles = cva(`${prociono.className} text-4xl pb-8`);

export function PageHeading({
  className,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"h1"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h1";
  return (
    <Comp className={headingStyles({ className })} {...props}>
      {children}
    </Comp>
  );
}
