import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/live";
import { morePostsQuery, allPostsQuery } from "@/sanity/lib/queries";
import type { Post as PostType } from "@/sanity.types";
import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";

const Post = ({ post }: { post: PostType }) => {
  const { _id, title, slug, excerpt, date } = post;

  return (
    <article
      key={_id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="text-gray-500 text-sm">
        <DateComponent dateString={date} />
      </div>

      <h3 className="mt-3 text-xl font-semibold">
        <Link
          className="hover:underline decoration-input transition-all hover:ease-linear"
          href={`/posts/${slug}`}
        >
          {title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
        {excerpt}
      </p>
    </article>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div>
    {heading && (
      <h2 className="text-xl font-semibold tracking-tight text-gray-900">
        {heading}
      </h2>
    )}
    <div className="mt-2 pt-8 space-y-12 border-t border-gray-200">
      {children}
    </div>
  </div>
);

export const MorePosts = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post) => (
        <Post key={post._id} post={post as unknown as PostType} />
      ))}
    </Posts>
  );
};

export const AllPosts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });

  if (!data || data.length === 0) {
    return <OnBoarding />;
  }

  return (
    <>
      <div className="-mt-10 mb-14 w-full">
        <h4 className="font-semibold text-2xl">Hey, I&apos;m Matteo!</h4>
        <p className="mt-3 line-clamp-3 leading-6 text-gray-600">
          I&apos;m going to write and share it here every week or so! Hope you
          enjoy whatever it is I have to say!
        </p>
      </div>
      <Posts
        heading="Recent Posts"
        subHeading={`${
          data.length === 1
            ? "This blog post is"
            : `These ${data.length} blog posts are`
        } populated from your Sanity Studio.`}
      >
        {data.map((post) => (
          <Post key={post._id} post={post as unknown as PostType} />
        ))}
      </Posts>
    </>
  );
};
