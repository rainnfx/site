import fs from "fs";
import path from "path";
import matter from "gray-matter";

const booksDir = path.join(process.cwd(), "src/content/books");

export function getBooks() {
  return fs
    .readdirSync(booksDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(booksDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(/\.mdx$/, ""),
        ...data,
      };
    });
}
