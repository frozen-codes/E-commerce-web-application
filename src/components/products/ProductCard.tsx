import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  isNew?: boolean;
  discountPercentage?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(
  { product }: ProductCardProps = {
    product: {
      id: "1",
      name: "Sample Product",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
      slug: "sample-product",
    },
  },
) {
  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : null;

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
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
        {product.discountPercentage && (
          <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded">
            {product.discountPercentage}% OFF
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
      <CardContent className="p-4 flex-grow">
        <Link to={`/product/${product.slug}`} className="hover:underline">
          <h3 className="font-medium text-base">{product.name}</h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          {discountedPrice ? (
            <>
              <p className="font-semibold">${discountedPrice.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold">${product.price.toFixed(2)}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button className="w-full" variant="outline">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
