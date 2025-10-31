import { PageHeading } from "@/components/heading";

export default function Bookshelf() {
  return (
    <main className="p-16">
      <PageHeading>Notes</PageHeading>
      <div>
        <div className="space-y-2 text-muted-foreground">
          <h4 className="text-muted-foreground pb-2">
            digital: Nikon D5100, Nikon 70-300mm VR & Nikon 17-55mm f/2.8 DX
          </h4>
          <h4 className="text-muted-foreground pb-2">
            film: Pentax K1000, Pentax-M SMC 50mm f/2
          </h4>
        </div>
      </div>
    </main>
  );
}
