"use client";

import { getBooks } from "@/content/books/books";
import { PageHeading } from "@/components/heading";
import BookContent from "@/components/book-content";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function BookshelfClient({ books }: { books: any[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBook = searchParams.get("book");

  const currentlyReading = books.filter((book: any) => book.isReading);
  const currentlyOnShelf = books.filter((book: any) => !book.isReading);

  const handleSelectedBook = (slug: string) => {
    router.push(`?book=${slug}`);
  };

  return (
    <main className="flex min-h-screen">
      <section className="flex-1 p-16">
        <PageHeading>Bookshelf</PageHeading>
        <div>
          <div className="space-y-2 text-muted-foreground pb-8">
            <h4 className="text-muted-foreground pb-2">Currently Reading</h4>
            <div className="space-y-6">
              {currentlyReading.map((book: any) => (
                <button
                  key={book.slug}
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleSelectedBook(book.slug)}
                >
                  <p className="text-foreground font-medium">{book.title}</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {book.author}, {book.year}
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <h4 className="text-muted-foreground pb-2">On My Shelf</h4>
            <div className="space-y-6">
              {currentlyOnShelf.map((book: any) => (
                <button
                  key={book.slug}
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleSelectedBook(book.slug)}
                >
                  <p className="text-foreground font-medium">{book.title}</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {book.author}, {book.year}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex-2 border-l border-l-border min-h-screen p-16">
        {selectedBook ? <BookContent slug={selectedBook} /> : <div />}
      </section>
    </main>
  );
}
