import React from "react";
import { Metadata } from "next";
import PostSelector from "./_components/postselector";

export const metadata: Metadata = {
  title: "Posts",
};

export default function BlogPage() {
  return <PostSelector />;
}
