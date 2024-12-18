import React from "react";
import { Metadata } from "next";
import { writing as allBlogs } from "#site/content";
import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mdx } from "@/components/mdx-components";

// Define the shape of PageProps explicitly
type PageProps = {
  params: { slug: string[] };
};

// Function to fetch a blog by its slug
async function getBlogFromParams(slug: string[]) {
  const slugPath = slug.join("/");
  const blog = allBlogs.find((blog) => blog.slugAsParams === slugPath);
  return blog || null;
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params.slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    authors: { name: blog.author },
  };
}

// Generate static paths
export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}

// Main page component
export default async function BlogPageItem({ params }: PageProps) {
  const blog = await getBlogFromParams(params.slug);

  if (!blog) {
    return null;
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        {blog.date && (
          <time
            dateTime={blog.date}
            className="block text-sm text-muted-foreground -mb-5"
          >
            Written by {blog.author} on {formatDate(blog.date)}
          </time>
        )}

        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            width={720}
            height={405}
            priority
            className="my-8 border bg-muted transition-colors"
          />
        ) : (
          <div className="my-8" />
        )}

        <h1 className="-mt-2 inline-block text-4xl font-bold capitalize leading-tight text-primary lg:text-5xl">
          {blog.title}
        </h1>
        <hr className="mt-5 mb-7" />
        <Mdx code={blog.body} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/posts"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            See all Posts
          </Link>
        </div>
      </div>
    </article>
  );
}
