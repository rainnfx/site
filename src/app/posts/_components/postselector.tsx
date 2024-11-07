"use client";

import React, { useState, useEffect } from "react";
import PageHeader from "@/components/page-header";
import { posts as allBlogs } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PostSelector() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const postsPerPage = 4;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const blogs = allBlogs
    .filter((posts) => posts.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-3xl px-4 py-12 md:px-8">
        <PageHeader
          title="Posts"
          description="A blog using velite. Posts are written in MDX"
        />
        <hr className="my-8" />
        {currentPosts.length ? (
          <div className="gap-10">
            {currentPosts.map((blog) => (
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
        {isMounted && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
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
