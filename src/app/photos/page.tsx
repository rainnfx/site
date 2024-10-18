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
        title="Photos"
        description="Some photos, some good some bad."
      />
      <hr className="my-8" />
    </div>
  );
}
