"use client";

import React, { useState, useEffect } from "react";
import PageHeader from "@/components/page-header";
import { posts as allBlogs } from "#site/content";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
}

interface RawBlogPost {
  published: boolean;
  [key: string]: any;
}

export default function PostSelector() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const postsPerPage = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const sortedBlogs = allBlogs
          .filter((post: RawBlogPost): post is BlogPost => {
            return (
              post.published &&
              typeof post.slug === "string" &&
              typeof post.title === "string" &&
              typeof post.date === "string"
            );
          })
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        setBlogs(sortedBlogs);
        setIsMounted(true);
      } catch (error) {
        console.error("Error sorting blogs:", error);
        setBlogs([]);
        setIsMounted(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (pageNumber: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentPage(pageNumber);
  };

  if (!isMounted) {
    return (
      <div className="flex justify-center w-full">
        <div className="w-full max-w-3xl px-4 py-12 md:px-8">
          <PageHeader
            title="Posts"
            description="A blog using velite. Posts are written in MDX"
          />
          <hr className="my-8" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-3xl px-4 py-12 md:px-8">
        <PageHeader
          title="Posts"
          description="A blog using velite. Posts are written in MDX"
        />
        <hr className="my-8" />
        <div className="gap-10">
          {currentPosts.length ? (
            currentPosts.map((blog) => (
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
                <Link href={`/${blog.slug}`} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
                <Separator />
              </article>
            ))
          ) : (
            <p>No Posts found</p>
          )}
        </div>
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) =>
                    handlePageChange(Math.max(1, currentPage - 1), e)
                  }
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => handlePageChange(index + 1, e)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) =>
                    handlePageChange(Math.min(totalPages, currentPage + 1), e)
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
