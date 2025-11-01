import dynamic from "next/dynamic";

export default function BookContent({ slug }: { slug: string }) {
  const MDXComponent = dynamic(() => import(`@/content/books/${slug}.mdx`));
  return <MDXComponent />;
}
