import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

// Sample cart data
const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Classic Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80",
    quantity: 1,
    size: "M",
    color: "Blue"
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
    quantity: 2,
    size: "32",
    color: "Dark Blue"
  }
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = shippingMethod === "express" ? 15 : (subtotal > 100 ? 0 : 10);
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col items-start gap-2 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <p className="text-muted-foreground">
          Complete your purchase by providing your shipping and payment details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Information */}
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-medium">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" placeholder="NY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP/Postal Code</Label>
                <Input id="zip" placeholder="10001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="United States" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-medium">Shipping Method</h2>
            <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
              <div className="flex items-start space-x-3 space-y-0">
                <RadioGroupItem value="standard" id="standard" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="standard" className="font-medium">
                    Standard Shipping (3-5 business days)
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {subtotal > 100 ? "Free" : "$10.00"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-y-0 mt-3">
                <RadioGroupItem value="express" id="express" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="express" className="font-medium">
                    Express Shipping (1-2 business days)
                  </Label>
                  <p className="text-sm text-muted-foreground">$15.00</p>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Information */}
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-medium">Payment Information</h2>
            <Tabs value={paymentMethod} on