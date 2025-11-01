import { prociono } from "@/lib/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-16">
      <h1 className={`${prociono.className} text-4xl`}>matteo</h1>
      <div className="pt-8">
        <div className="space-y-2 text-muted-foreground pb-4">
          <p>I'm a 16 year old from Vancouver ca.</p>
          <p>
            In my free time i enjoy learning new things, writing, hiking,
            reading, and photography!
          </p>
        </div>
        <div className="text-muted-foreground space-y-2">
          <Image
            src="https://vat10f3xu3.ufs.sh/f/07Uqa5uSTLfhZ45DtDAUzENi9CGmLXuTbQ2JsfwYr8KRngaA"
            alt="me with a storm grate"
            height={256}
            width={341.333333}
          />
          <p>Above: Me, holding a stormwater grate</p>
        </div>
        <div className="pt-6 text-muted-foreground">
          <p>I hope you enjoy exploring my site!</p>
        </div>
      </div>
    </main>
  );
}
