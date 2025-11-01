import { getBooks } from "@/content/books/books";
import BookshelfClient from "./client";

export default function BookshelfPage() {
  const books = getBooks();
  return <BookshelfClient books={books} />;
}
