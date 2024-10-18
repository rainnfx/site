import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { blogs as allBlogs } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Reading List",
};

export default function ReadingList() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Reading List"
        description="A list of books I want to read, or have read and recommend to others."
      />
      <hr className="my-8" />
    </div>
  );
}
