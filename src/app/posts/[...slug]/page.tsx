import React from "react";
import { Metadata } from "next";
import { posts as allBlogs } from "#site/content";
import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mdx } from "@/components/mdx-components";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

async function getBlogFromParams({ slug }: { slug: string[] }) {
  const slugPath = slug.join("/");
  const blog = allBlogs.find((blog) => blog.slugAsParams === slugPath);
  return blog;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogFromParams({ slug });

  if (!blog) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    authors: [{ name: blog.author }],
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogFromParams({ slug });

  if (!blog) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        {blog.date && (
          <time
            dateTime={blog.date}
            className="-mb-5 block text-sm text-muted-foreground"
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
        <hr className="mb-7 mt-5" />
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
