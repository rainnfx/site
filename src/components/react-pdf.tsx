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
    <div className="flex flex-col items-center justify-center min-h-full w-full mt-4 mb-4">
      <div className="flex justify-center w-full">
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          className="my-react-pdf rounded-lg overflow-hidden shadow-md bg-background"
        >
          <Page pageNumber={pageNumber} className="rounded-lg" />
        </Document>
      </div>
      <div className="flex justify-between w-full max-w-md mt-4 px-4">
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
