import CtaText from "@/components/cta";
import { Separator } from "@/components/ui/separator";
import { lora, jetbrains_mono } from "../lib/fonts";
import Underline from "@/components/underline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-0">
      <div className="w-full sm:w-3/4 lg:w-1/3 pt-16 sm:pt-20 lg:pt-24 pb-16 flex flex-col justify-between items-start">
        {/* Header */}
        <div className="text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem] font-medium leading-tight">
          <span>hey i'm matteo </span>
          <span className="inline-block align-middle translate-y-[2px]">
            <CtaText className="!m-0 !inline-block !align-middle w-[70px] h-[70px] sm:w-[76px] sm:h-[76px]" />
          </span>
          <span>, and i</span>
        </div>

        {/* Main Statement */}
        <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 leading-snug">
          <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl">make</h1>
          <span className="relative inline-block">
            <span
              className={`${lora.className} font-medium italic text-3xl sm:text-4xl lg:text-5xl text-[#42CCA0]`}
            >
              things
            </span>
            <Underline className="absolute left-0 -bottom-2 sm:-bottom-3 lg:-bottom-3.5 w-full pointer-events-none" />
          </span>
          <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl">
            on the
          </h1>
          <h1
            className={`${jetbrains_mono.className} font-medium text-3xl sm:text-4xl lg:text-5xl text-[#2563EB] -tracking-widest`}
          >
            internet
          </h1>
        </div>

        {/* About Section */}
        <section className="pt-8 sm:pt-10 lg:pt-12 w-full">
          <p className="text-lg sm:text-xl text-muted-foreground pb-4 sm:pb-6">
            i'm a 16 year old from vancouver ca
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground pb-4 sm:pb-6">
            currently i am learning in public and available for freelance work.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground pb-6 sm:pb-8">
            in my free time i enjoy learning new things, hiking, reading,
            writing, and photography!
          </p>
        </section>

        <Separator />

        {/* Projects */}
        <section className="pt-6 sm:pt-8 lg:pt-10 w-full">
          <p className="text-lg sm:text-xl font-medium pb-4 sm:pb-6">
            projects
          </p>
          <div className="pb-4 w-full overflow-x-auto">
            <Image
              height={816}
              width={1148}
              className="border border-input rounded-md w-full max-w-full object-contain"
              alt="scout0 dashboard"
              src="https://vat10f3xu3.ufs.sh/f/07Uqa5uSTLfhgfbsJ1X2R5eEXLKU0d8uZIb6SvP7ATaC4NpB"
            />
            <p className="text-muted-foreground text-lg py-4">scout0</p>
          </div>
        </section>

        <Separator />

        {/* Footer */}
        <section className="py-4 flex flex-col justify-between h-24 w-full">
          <h4 className="text-lg text-muted-foreground">© 2025 matteoa.com</h4>
          <div className="pt-2">{/* footer icons or links can go here */}</div>
        </section>
      </div>
    </main>
  );
}
