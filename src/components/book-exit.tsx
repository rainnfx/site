"use client";

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function BookExit() {
  const router = useRouter();
  function exitBook() {
    router.push("/bookshelf");
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      type="submit"
      className="text-muted-foreground cursor-pointer hover:text-muted-foreground hover:bg-black/5"
      onClick={exitBook}
    >
      <ArrowLeftIcon />
    </Button>
  );
}
