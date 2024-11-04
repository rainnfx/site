"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "/images/photos/bird1.jpg",
    width: 600,
    height: 800,
    alt: "bird",
    span: "col-span-2 row-span-2",
    camera: "Nikon D5100",
    lens1: "82mm",
    lens2: "f/5.6",
    lens3: "1/80s",
    lens4: "ISO 100",
  },
  {
    id: 2,
    src: "/images/photos/bench.jpg",
    width: 600,
    height: 800,
    alt: "bench",
    span: "col-span-1 row-span-1",
    camera: "Nikon D5100",
    lens1: "55mm",
    lens2: "f/5.6",
    lens3: "1/1000s",
    lens4: "ISO 250",
  },
  {
    id: 3,
    src: "/images/photos/crow.jpg",
    width: 600,
    height: 800,
    alt: "crow",
    span: "col-span-1 row-span-1",
    camera: "Nikon D5100",
    lens1: "140mm",
    lens2: "f/5.6",
    lens3: "1/400s",
    lens4: "ISO 400",
  },
  {
    id: 4,
    src: "/images/photos/forest.jpg",
    width: 600,
    height: 800,
    alt: "forest",
    span: "col-span-2 row-span-2",
    camera: "Nikon D5100",
    lens1: "24mm",
    lens2: "f/5.6",
    lens3: "1/1000s",
    lens4: "ISO 250",
  },
  {
    id: 5,
    src: "/images/photos/clouds.jpg",
    width: 600,
    height: 800,
    alt: "clouds",
    span: "col-span-1 row-span-1",
    camera: "iPad Air 5",
  },
  {
    id: 6,
    src: "/images/photos/bird2.jpg",
    width: 600,
    height: 800,
    alt: "bird2",
    span: "col-span-1 row-span-1",
    camera: "Nikon D5100",
    lens1: "55mm",
    lens2: "f/5.6",
    lens3: "1/250s",
    lens4: "ISO 100",
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
              transition: { duration: 0.3, ease: "easeInOut" },
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
            <div className="relative aspect-video rounded-lg">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          )}
          <div className="px-20 font-serif text-muted-foreground">
            <p>{selectedPhoto?.camera}</p>
            <p>{selectedPhoto?.lens1}</p>
            <p>{selectedPhoto?.lens2}</p>
            <p>{selectedPhoto?.lens3}</p>
            <p>{selectedPhoto?.lens4}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
