"use client";

import { PageHeading } from "@/components/heading";
import { useRouter } from "next/navigation";

export default function BookshelfClient({
  books,
  selectedBook,
}: {
  books: any[];
  selectedBook?: string;
}) {
  const router = useRouter();

  const currentlyReading = books.filter((book: any) => book.isReading);
  const currentlyOnShelf = books.filter((book: any) => !book.isReading);

  const handleSelectedBook = (slug: string) => {
    router.push(`?book=${slug}`);
  };

  return (
    <section className="flex-1 p-16">
      <PageHeading>Bookshelf</PageHeading>
      <div>
        <div className="space-y-2 text-muted-foreground pb-8">
          <h4 className="text-muted-foreground pb-2">Currently Reading</h4>
          <div className="space-y-6">
            {[...currentlyReading]
              .sort(
                (a, b) =>
                  new Date(b.date ?? b.year).getTime() -
                  new Date(a.date ?? a.year).getTime()
              )
              .map((book: any) =>
                book.hasNotes ? (
                  <button
                    key={book.slug}
                    type="button"
                    className="cursor-pointer text-left w-full"
                    onClick={() => handleSelectedBook(book.slug)}
                  >
                    <p className="text-foreground font-medium">{book.title}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {book.author}, {book.year}
                    </p>
                  </button>
                ) : (
                  <div
                    key={book.slug}
                    className="text-left w-full cursor-default"
                  >
                    <p className="text-foreground font-medium">{book.title}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {book.author}, {book.year}
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <h4 className="text-muted-foreground pb-2">On My Shelf</h4>
          <div className="space-y-6">
            {[...currentlyOnShelf]
              .sort(
                (a, b) =>
                  new Date(b.date ?? b.year).getTime() -
                  new Date(a.date ?? a.year).getTime()
              )
              .map((book: any) =>
                book.hasNotes ? (
                  <button
                    key={book.slug}
                    type="button"
                    className="cursor-pointer text-left w-full"
                    onClick={() => handleSelectedBook(book.slug)}
                  >
                    <p className="text-foreground font-medium">{book.title}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {book.author}, {book.year}
                    </p>
                  </button>
                ) : (
                  <div
                    key={book.slug}
                    className="text-left w-full cursor-default"
                  >
                    <p className="text-foreground font-medium">{book.title}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {book.author}, {book.year}
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
