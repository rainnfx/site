import { PageHeading } from "@/components/heading";

export default function Bookshelf() {
  return (
    <main className="p-16">
      <PageHeading>Bookshelf</PageHeading>
      <div>
        <div className="space-y-2 text-muted-foreground">
          <h4 className="text-muted-foreground pb-2">Currently Reading</h4>
          <div className="space-y-6">
            <div>
              <p className="text-foreground font-medium">A Promised Land</p>
              <p className="text-muted-foreground text-sm mt-2">
                Barack Obama, 2020
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-wrap">
                The Technological Republic: Hard Power, Soft Belief, and the
                Future of the West
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Alex Karp, 2025
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </main>
  );
}
