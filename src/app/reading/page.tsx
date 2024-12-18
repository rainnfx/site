import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reading List",
};

const books = [
  {
    title: "The Creative Act: A Way of Being",
    author: "author",
    link: "https://sites.prh.com/thecreativeact",
  },
  {
    title: "Smart Brevity",
    author: "author",
    link: "https://www.axios.com/smart-brevity",
  },
];

export default function ReadingList() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Reading List"
        description="A list of books I want to read, or have read and recommend to others."
      />
      <hr className="my-8" />
      {books.map((item, index) => (
        <p
          key={index}
          className="text-base leading-7 text-muted-foreground [&:not(:first-child)]:mt-2"
        >
          <span className="text-primary">{index + 1}.</span> {item.title}
          <span className="text-primary"> — </span>
          <Link
            href={{ pathname: item.link }}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            link
          </Link>
        </p>
      ))}
    </div>
  );
}
