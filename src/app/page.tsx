import { prociono } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="p-16">
      <h1 className={`${prociono.className} text-4xl`}>matteo</h1>
      <div className="pt-8">
        <div className="space-y-2 text-muted-foreground">
          <p>I'm a 16 year old from Vancouver ca.</p>
          <p>
            In my free time i enjoy learning new things, writing, hiking,
            reading, and photography!
          </p>
        </div>
        <div className="pt-12 text-muted-foreground">
          <p>I hope you enjoy exploring my site!</p>
        </div>
      </div>
    </main>
  );
}
