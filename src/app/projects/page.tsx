import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";

const projects = [
  {
    id: 1,
    name: "rainnfx_k1",
    description: "Built a macropad through a HackClub YSWS.",
    url: "https://github.com/hackclub/hackpad/tree/main/hackpads/rainnfx_k1",
  },
];

export const metadata: Metadata = {
  title: "Projects",
};

export default function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Projects"
        description="A few things I've built, with more to come."
      />
      <hr className="my-8" />
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <div>
              <Link
                href={project.url as unknown as URL}
                className="font-semibold text-blue-500 hover:underline"
                target="_blank"
              >
                {project.name}
              </Link>
              <p className="mt-1 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
