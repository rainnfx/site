import { prociono } from "@/lib/fonts";

export default function Bookshelf() {
  return (
    <main className="p-16">
      <h1 className={`${prociono.className} text-4xl`}>Bookshelf</h1>
      <div className="pt-8">
        <div className="space-y-2 text-muted-foreground">
          <h4 className="text-muted-foreground pb-2">Currently Reading</h4>
          <div>
            <p className="text-foreground font-medium">A Promise Land</p>
            <p className="text-muted-foreground text-sm mt-2">
              Barrack Obama, 2020
            </p>
          </div>
        </div>
        <div className="mt-8 text-muted-foreground">
          <h4 className="text-muted-foreground pb-2">On My Shelf</h4>
          <div>
            <p className="text-foreground font-medium">A Promise Land</p>
            <p className="text-muted-foreground text-sm mt-2">
              Barrack Obama, 2020
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
