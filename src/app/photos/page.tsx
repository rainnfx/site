import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import PhotoGallery from "./_components/gallery";

export const metadata: Metadata = {
  title: "Photography",
};

export default function ReadingList() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Photos"
        description="Some photos, some good some bad."
      />
      <hr className="my-8" />
      <PhotoGallery />
    </div>
  );
}
