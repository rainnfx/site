import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { posts as allBlogs } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Posts",
};

export default function BlogPage() {
  const blogs = allBlogs
    .filter((posts) => posts.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-3xl px-4 py-12 md:px-8">
        <PageHeader
          title="Posts"
          description="A blog using velite. Posts are written in MDX"
        />
        <hr className="my-8" />
        {blogs.length ? (
          <div className="gap-10">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group relative flex flex-col space-y-2 mb-7"
              >
                {blog.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(blog.date)}
                  </p>
                )}
                <h2 className="text-2xl font-extrabold text-primary">
                  {blog.title}
                </h2>
                {blog.description && (
                  <p className="text-muted-foreground">{blog.description}</p>
                )}
                <Link href={blog.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
                <Separator />
              </article>
            ))}
          </div>
        ) : (
          <p>No Posts found</p>
        )}
      </div>
    </div>
  );
}
