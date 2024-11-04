"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const photos = [
  {
    id: 1,
    src: "/images/photos/bird1.jpg",
    width: 600,
    height: 800,
    alt: "bird",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/photos/bench.jpg",
    width: 600,
    height: 800,
    alt: "bench",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/photos/bench.jpg",
    width: 600,
    height: 800,
    alt: "bench",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/photos/bench.jpg",
    width: 600,
    height: 800,
    alt: "bench",
    span: "col-span-2 row-span-2",
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className={`${photo.span} overflow-hidden rounded-lg cursor-pointer relative`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
              zIndex: 10,
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="transition-transform duration-300 ease-in-out rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm font-medium">{photo.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={selectedPhoto !== null}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-4xl w-full bg-background">
          {selectedPhoto && (
            <div className="relative aspect-video">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          )}
          <div className="px-8">
            <p>24mp</p>
            <p>105mm</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
