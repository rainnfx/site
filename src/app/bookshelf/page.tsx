import { PageHeading } from "@/components/heading";
import { getBooks } from "@/content/books/books";

export default function Bookshelf() {
  const books = getBooks();
  const currentlyReading = books.filter((book: any) => book.isReading);

  return (
    <main className="flex min-h-screen">
      <section className="flex-1 p-16">
        <PageHeading>Bookshelf</PageHeading>
        <div>
          <div className="space-y-2 text-muted-foreground">
            <h4 className="text-muted-foreground pb-2">Currently Reading</h4>
            <div className="space-y-6">
              {currentlyReading.map((book: any) => (
                <div key={book.slug}>
                  <p className="text-foreground font-medium">{book.title}</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {book.author}, {book.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex-2 border-l border-l-border min-h-screen p-16">
        <p>hey</p>
      </section>
    </main>
  );
}
