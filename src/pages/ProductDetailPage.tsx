import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heart, Minus, Plus, Share2, Star, Truck } from "lucide-react";
import ProductCard, { Product } from "@/components/products/ProductCard";

// Sample product data
const product = {
  id: "1",
  name: "Classic Denim Jacket",
  price: 89.99,
  discountPercentage: 10,
  rating: 4.5,
  reviewCount: 127,
  description:
    "A timeless denim jacket crafted from premium quality denim fabric. Features a classic button-up front, chest pockets, and adjustable button cuffs. Perfect for layering in any season.",
  features: [
    "100% premium cotton denim",
    "Button-up front",
    "Adjustable button cuffs",
    "Chest pockets",
    "Machine washable",
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Blue", "Black", "Light Wash"],
  images: [
    "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80",
    "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80",
    "https://images.unsplash.com/photo-1608228079968-c7681a129f7c?w=800&q=80",
    "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&q=80",
  ],
  inStock: true,
  sku: "DJ-12345",
  category: "Outerwear",
};

// Sample related products
const relatedProducts: Product[] = [
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
    slug: "slim-fit-jeans",
  },
  {
    id: "3",
    name: "Cotton T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    slug: "cotton-t-shirt",
    discountPercentage: 15,
  },
  {
    id: "4",
    name: "Leather Belt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    slug: "leather-belt",
  },
  {
    id: "5",
    name: "Canvas Sneakers",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80",
    slug: "canvas-sneakers",
    isNew: true,
  },
];

// Sample reviews
const reviews = [
  {
    id: "1",
    author: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
    date: "2023-10-15",
    title: "Perfect fit and great quality",
    content:
      "I absolutely love this jacket! The denim is high quality and the fit is perfect. I've received so many compliments when wearing it. Definitely worth the price.",
  },
  {
    id: "2",
    author: "Michael Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 4,
    date: "2023-09-28",
    title: "Great jacket, slightly large",
    content:
      "The quality of this jacket is excellent, and it looks just like in the pictures. My only issue is that it runs slightly large. I would recommend sizing down if you're between sizes.",
  },
  {
    id: "3",
    author: "Emma Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 5,
    date: "2023-11-02",
    title: "Versatile and stylish",
    content:
      "This is now my go-to jacket for almost any casual outfit. It's versatile, stylish, and the denim quality is exceptional. The color is exactly as shown and it's very comfortable to wear.",
  },
];

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : null;

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : index < rating ? "text-yellow-400 fill-yellow-400 opacity-50" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-square overflow-hidden rounded-md cursor-pointer ${selectedImage === index ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} - View ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                SKU: {product.sku}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {discountedPrice ? (
              <>
                <span className="text-3xl font-bold">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                  {product.discountPercentage}% OFF
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`px-4 py-2 rounded-md border cursor-pointer ${selectedSize === size ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"}`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <RadioGroup
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="flex flex-wrap gap-2"
              >
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center">
                    <RadioGroupItem
                      value={color}
                      id={`color-${color}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`color-${color}`}
                      className={`px-4 py-2 rounded-md border cursor-pointer ${selectedColor === color ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"}`}
                    >
                      {color}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <Button className="flex-1" size="lg">
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Buy Now
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-muted p-4 rounded-lg flex items-start gap-3">
            <Truck className="h-5 w-5 mt-0.5 text-muted-foreground" />
            <div>
              <p className="font-medium">Free Shipping & Returns</p>
              <p className="text-sm text-muted-foreground">
                Free standard shipping on orders over $100 and free returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="details"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
            >
              Reviews ({reviews.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-4">
            <div className="space-y-4">
              <p>{product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Product Information</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">SKU:</span> {product.sku}
                    </li>
                    <li>
                      <span className="font-medium">Category:</span>{" "}
                      {product.category}
                    </li>
                    <li>
                      <span className="font-medium">Material:</span> 100% Cotton
                      Denim
                    </li>
                    <li>
                      <span className="font-medium">Care:</span> Machine wash
                      cold, tumble dry low
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Shipping Information</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Delivery:</span> 3-5
                      business days
                    </li>
                    <li>
                      <span className="font-medium">Shipping:</span> Free
                      standard shipping on orders over $100
                    </li>
                    <li>
                      <span className="font-medium">Returns:</span> 30-day
                      return policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="features" className="pt-4">
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
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
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </span>
                  </div>
                </div>
                <Button>Write a Review</Button>
              </div>

              <Separator />

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="rounded-full w-10 h-10"
                        />
                        <div>
                          <h4 className="font-medium">{review.author}</h4>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium">{review.title}</h5>
                      <p className="text-muted-foreground mt-1">
                        {review.content}
                      </p>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
