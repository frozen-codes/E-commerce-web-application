import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Testimonial */}
          <div className="bg-slate-50 p-8 rounded-xl relative">
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
            <div className="mb-4">
              <span className="text-xs text-muted-foreground">
                [Testimonial]
              </span>
            </div>
            <div className="mb-6">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
                  alt="Customer"
                />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-medium">
                Finally, a brand that understands modern elegance! The quality
                is amazing & I always get when I wear my Momento.
              </p>
              <Button variant="outline" className="rounded-full px-4 text-xs">
                GO NOW
              </Button>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">400+</p>
                <p className="text-xs text-muted-foreground">COLLECTIONS</p>
              </div>
              <div>
                <p className="text-sm font-medium">320K</p>
                <p className="text-xs text-muted-foreground">
                  CUSTOMERS WORLDWIDE
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Brand statement */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs">[2023]</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-orange-500 fill-orange-500"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-medium">
                At Momento, we believe
              </span>
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="User"
                />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <span className="text-lg font-medium">
                fashion is more than just
              </span>
              <span className="bg-slate-800 text-white px-2 py-1 rounded-md">
                👕
              </span>
              <span className="text-lg font-medium">
                // clothing—it's an expression of who you are in every moment.
              </span>
            </div>
            <Button variant="link" className="text-xs flex items-center gap-1">
              LEARN MORE{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
            <div className="text-right">
              <span className="text-xs text-muted-foreground">
                [View the Moment]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
