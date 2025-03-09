import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  image: string;
  year: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "@ikigai - jacket momento",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    year: "2024",
  },
  {
    id: "2",
    name: "@international - going distance",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80",
    year: "2024",
  },
  {
    id: "3",
    name: "@international - just do it",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80",
    year: "2024",
  },
  {
    id: "4",
    name: "@momento - premium hoodie",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    year: "2024",
  },
];

export default function ProductGallery() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex justify-between items-center">
            <Badge variant="accent" className="mb-4">
              [Other]
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-white">
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs">{product.year}</p>
                      </div>
                    </div>
                    {product.id === "1" && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end mt-4">
              <Button variant="ghost" size="sm" className="text-xs">
                Next
              </Button>
            </div>
          </Carousel>
        </div>

        <div className="flex items-center overflow-x-auto py-4 space-x-4 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-sm font-medium">momento.</span>
              <span className="mx-2">+</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm">
                From timeless classics to bold statement pieces, our collections
                are thoughtfully...
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80"
              alt="Fashion collection"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Everyday Essentials 2023</p>
                <p className="text-sm font-medium">Statement Pieces 2023</p>
                <p className="text-sm font-medium">Timeless Classics 2023</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm">
              Your go-to wardrobe staples, crafted for comfort and effortless
              style.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-4 text-xs"
            >
              GET STARTED <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <img
                src="https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&q=80"
                alt="Fashion collection"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=300&q=80"
                alt="Fashion collection"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
