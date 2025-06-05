import { Button } from "./Button";
import { Input } from "./Input";

export default function Footer() {
  return (
    <footer className=" border-gray-100 border-t">
      <div className="">
        <div className="">
          <div className="">
            <h3 className="mb-10 text-2xl font-bold leading-tight tracking-tighter">
              Written by Matteo Aure
            </h3>
            <p className="-mt-7 text-muted-foreground">
              Copyright 2025 — Matteo Aure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
