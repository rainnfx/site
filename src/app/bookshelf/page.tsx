import { getBooks } from "@/content/books/books";
import BookshelfClient from "./client";
import BookContent from "@/components/book-content";

export default async function BookshelfPage({
  searchParams,
}: {
  searchParams: { book?: string };
}) {
  const books = getBooks();
  const params = await searchParams; // Unwrap the promise
  const selectedBook = params.book;

  return (
    <main className="flex min-h-screen">
      <BookshelfClient books={books} selectedBook={selectedBook} />
      <section className="flex-2 border-l border-l-border min-h-screen p-16">
        {selectedBook ? <BookContent slug={selectedBook} /> : <div />}
      </section>
    </main>
  );
}
