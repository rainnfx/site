import React from "react";
import { Metadata } from "next";
import PostSelector from "./_components/postselector";

export const metadata: Metadata = {
  title: "Writing",
};

export default function BlogPage() {
  return <PostSelector />;
}
