import { Suspense } from "react";

import { AllPosts } from "@/app/components/Posts";

export default async function Page() {
  return (
    <>
      <div className="">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
