import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHeading } from "./heading";

import { useMDXComponents } from "@/mdx-components";

import { jetbrains_mono } from "@/lib/fonts";
import { BookExit } from "./book-exit";

export default async function BookContent({ slug }: { slug: string }) {
  const filePath = path.join(process.cwd(), "src/content/books", `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);

  return (
    <article>
      <div className="flex items-center gap-x-2 pb-3">
        <BookExit />
        <p
          className={`text-muted-foreground text-sm leading-none ${jetbrains_mono.className}`}
        >
          {data.read}
        </p>
      </div>{" "}
      <PageHeading>{data.title}</PageHeading>
      <p className="text-muted-foreground pb-2">
        {data.author} ({data.year})
      </p>
      <MDXRemote source={content} components={useMDXComponents} />
    </article>
  );
}
