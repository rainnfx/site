import { Button } from "./Button";
import { Input } from "./Input";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-gray-100 border-t">
      <div className="container">
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <div className="lg:mb-0 lg:w-1/2 lg:pr-4 mb-7">
            <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:text-left lg:text-5xl">
              Written by Matteo Aure
            </h3>
            <p className="-mt-7 text-muted-foreground">
              Copyright 2025 — Matteo Aure
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center sm:mt-8 justify-center lg:w-1/2 lg:pl-4">
            <div className="flex w-full max-w-sm flex-col lg:flex-row items-center space-y-3 lg:space-y-0">
              <div className="flex w-full rounded-md border border-input bg-white h-14">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-0 bg-transparent h-14"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="hidden lg:inline-flex rounded-l-none bg-neutral-800 h-14 px-8"
                >
                  Subscribe
                </Button>
              </div>
              <Button
                type="submit"
                variant="default"
                className="w-full bg-neutral-800 h-14 px-8 lg:hidden"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
