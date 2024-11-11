/* eslint-disable no-new-func */
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import * as runtime from "react/jsx-runtime";

import Image from "next/image";
import PdfReactPdf from "./react-pdf";
import { Button } from "./ui/button";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

type ComponentsProps = HTMLAttributes<HTMLElement>;

const components = {
  h1: ({ ...props }: ComponentsProps) => (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mt-2"
      )}
      {...props}
    />
  ),
  h2: ({ ...props }: ComponentsProps) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0"
      )}
      {...props}
    />
  ),
  h3: ({ ...props }: ComponentsProps) => (
    <h3
      className={cn("mt-8 scroll-m-20 text-2xl font-bold tracking-tight")}
      {...props}
    />
  ),
  h4: ({ ...props }: ComponentsProps) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-zinc-200 text-xl font-bold tracking-tight"
      )}
      {...props}
    />
  ),
  a: ({ ...props }: ComponentsProps) => (
    <a
      className={cn("font-medium underline text-primary underline-offset-4")}
      {...props}
    />
  ),
  p: ({ ...props }: ComponentsProps) => (
    <p
      className={cn(
        "leading-7 text-muted-foreground [&:not(:first-child)]:mt-6"
      )}
      {...props}
    />
  ),
  strong: ({ ...props }: ComponentsProps) => (
    <strong
      className={cn("leading-7 text-zinc-200 [&:not(:first-child)]:mt-6")}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentsProps) => (
    <ul
      className={cn("my-6 ml-6 list-disc marker:text-primary", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ComponentsProps) => (
    <ol
      className={cn("my-6 ml-6 list-decimal marker:text-primary", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentsProps) => (
    <li className={cn("mt-2 text-muted-foreground", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentsProps) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-secondary m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: ComponentsProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentsProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentsProps) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto text-sm  rounded-lg border !bg-secondary py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentsProps) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] !bg-secondary font-code font-light !text-sm",
        className
      )}
      {...props}
    />
  ),
  Button,
  PdfReactPdf,
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...components }} />;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
}
