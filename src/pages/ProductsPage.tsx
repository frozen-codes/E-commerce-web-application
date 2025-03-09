import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard, { Product } from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import { Grid3X3, List } from "lucide-react";

// Sample product data
const products: Product[] = [
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
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&q=80",
    slug: "leather-crossbody-bag",
  },
  {
    id: "4",
    name: "Minimalist Watch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80",
    slug: "minimalist-watch",
    discountPercentage: 15,
  },
  {
    id: "5",
    name: "Striped Cotton Shirt",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    slug: "striped-cotton-shirt",
  },
  {
    id: "6",
    name: "High-Waisted Jeans",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
    slug: "high-waisted-jeans",
    isNew: true,
  },
  {
    id: "7",
    name: "Oversized Sunglasses",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&q=80",
    slug: "oversized-sunglasses",
    discountPercentage: 10,
  },
  {
    id: "8",
    name: "Leather Ankle Boots",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
    slug: "leather-ankle-boots",
  },
  {
    id: "9",
    name: "Knit Sweater",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
    slug: "knit-sweater",
  },
  {
    id: "10",
    name: "Canvas Backpack",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    slug: "canvas-backpack",
    discountPercentage: 20,
  },
  {
    id: "11",
    name: "Floral Print Blouse",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80",
    slug: "floral-print-blouse",
  },
  {
    id: "12",
    name: "Slim Fit Chinos",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80",
    slug: "slim-fit-chinos",
    isNew: true,
  },
];

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters: any) => {
    // In a real app, this would filter the products based on the selected filters
    console.log("Filters changed:", filters);
    // For demo purposes, we're just using the full product list
    setFilteredProducts(products);
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
    let sortedProducts = [...filteredProducts];

    switch (value) {
      case "price-low":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sortedProducts.sort((a, b) =>
          a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1,
        );
        break;
      case "featured":
      default:
        // Keep original order for featured
        sortedProducts = [...products];
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
        <p className="text-muted-foreground">
          Browse our collection of high-quality fashion items.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Filters */}
        <div className="lg:w-1/4">
          <ProductFilter
            onFilterChange={handleFilterChange}
            className="sticky top-20"
          />
        </div>

        {/* Product grid */}
        <div className="lg:w-3/4 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} products
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Select value={sortOption} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4"
                >
                  <div className="sm:w-1/3">
                    <div className="aspect-square overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="sm:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <div className="mt-2 flex items-center gap-2">
                        {product.discountPercentage ? (
                          <>
                            <p className="font-semibold">
                              $
                              {(
                                product.price *
                                (1 - product.discountPercentage / 100)
                              ).toFixed(2)}
                            </p>
                            <p className="text-sm text-muted-foreground line-through">
                              ${product.price.toFixed(2)}
                            </p>
                          </>
                        ) : (
                          <p className="font-semibold">
                            ${product.price.toFixed(2)}
                          </p>
                        )}
                        {product.isNew && (
                          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded ml-2">
                            New
                          </span>
                        )}
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button className="flex-1 sm:flex-none">
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
