import Link from "next/link";
import { Button } from "./Button";
import { Input } from "./Input";

export default function Header() {
  return (
    <header className="bg-gray-50 border-b border-gray-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[42rem]">
      <div className="container">
        <div className="flex min-h-[200px] flex-col justify-between py-16">
          <div className="flex flex-col lg:w-1/2">
            <Link href="/">
              <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter lg:text-4xl">
                Written by Matteo Aure
              </h3>
            </Link>
            <p className="text-muted-foreground">
              Blog about software development & design
            </p>
          </div>
          <div className="flex mt-4 w-full">
            <div className="w-full">
              <div className="flex w-full rounded-md border border-input bg-white">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-0 bg-transparent h-12 flex-1"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="hidden lg:inline-flex rounded-l-none bg-neutral-800 h-12 px-6"
                >
                  Subscribe
                </Button>
              </div>
              <Button
                type="submit"
                variant="default"
                className="mt-3 w-full bg-neutral-800 h-12 px-6 lg:hidden"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
