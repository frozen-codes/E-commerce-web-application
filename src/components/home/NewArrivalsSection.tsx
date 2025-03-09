import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  isNew?: boolean;
}

const newArrivals: Product[] = [
  {
    id: "1",
    name: "Casual Summer Dress",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
    slug: "casual-summer-dress",
    isNew: true,
  },
  {
    id: "2",
    name: "Classic Denim Jacket",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80",
    slug: "classic-denim-jacket",
    isNew: true,
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&q=80",
    slug: "leather-crossbody-bag",
    isNew: true,
  },
  {
    id: "4",
    name: "Minimalist Watch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80",
    slug: "minimalist-watch",
    isNew: true,
  },
];

export default function NewArrivalsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              New Arrivals
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out our latest products and stay ahead of the fashion curve.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {newArrivals.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative">
                <Link to={`/product/${product.slug}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                    New
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background/90"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
              <CardContent className="p-4">
                <Link
                  to={`/product/${product.slug}`}
                  className="hover:underline"
                >
                  <h3 className="font-medium text-base">{product.name}</h3>
                </Link>
                <p className="font-semibold mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="outline">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/new-arrivals">View All New Arrivals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
