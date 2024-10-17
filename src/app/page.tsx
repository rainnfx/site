import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-96 pt-16">
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
        Hey, I'm Matteo. I'm a student who is passionate about building things
        that work.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
        My interest in programming started back when I was 6 when I had to do
        little block based coding activites in elementary school. Ever since
        then, I have been hooked on programming and have been learning new
        things.
      </p>
    </section>
  );
}
