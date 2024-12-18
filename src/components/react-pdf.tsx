"use client";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PdfProps } from "../types";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfReactPdf({ src }: PdfProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function nextPage() {
    setPageNumber((v) => ++v);
  }

  function prevPage() {
    setPageNumber((v) => --v);
  }

  return (
    <div className="my-4 flex min-h-full w-full flex-col items-center justify-center">
      <div className="flex w-full justify-center">
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          className="my-react-pdf overflow-hidden rounded-lg bg-background shadow-md"
        >
          <Page pageNumber={pageNumber} className="rounded-lg" />
        </Document>
      </div>
      <div className="mt-4 flex w-full max-w-md justify-between px-4">
        <Button variant="outline" onClick={prevPage} disabled={pageNumber <= 1}>
          <ChevronLeft />
        </Button>
        <p className="text-muted-foreground">
          Page {pageNumber} of {numPages}
        </p>
        <Button
          variant="outline"
          onClick={nextPage}
          disabled={pageNumber >= (numPages ?? -1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
