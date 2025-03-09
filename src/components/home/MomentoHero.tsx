import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function MomentoHero() {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-medium">momento.</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">info@momento.com</span>
                <span className="text-sm">(+12) 808 100 1900</span>
              </div>
            </div>

            <div className="mt-24">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                where <br /> - a style <br /> moment
              </h1>
              <div className="mt-6 flex items-center">
                <Badge variant="accent" className="mr-2">
                  # FASHION
                </Badge>
                <div className="flex items-center ml-auto">
                  <span className="text-sm font-medium mr-2">320K</span>
                  <span className="text-xs text-muted-foreground">
                    INFLUENCED PEOPLE
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm max-w-md">
                From everyday essentials to statement pieces, our curated
                collection is designed to celebrate your style, wherever life
                takes you.
              </p>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <Avatar>
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="User"
                  />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <Avatar className="bg-orange-500 text-white">
                  <AvatarFallback>+</AvatarFallback>
                </Avatar>
              </div>
              <span className="ml-4 text-sm">[22015]</span>
            </div>
          </div>

          <div className="flex justify-between items-end mt-12">
            <Button variant="ghost" className="flex items-center gap-2 text-sm">
              SCROLL DOWN <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 text-sm">
              EXPLORE <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative bg-slate-100 flex items-center justify-center">
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white h-8 w-8"
            >
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white h-8 w-8"
            >
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white h-8 w-8"
            >
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Button>
          </div>
          <div className="w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
              alt="Model wearing Momento clothing"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-sm max-w-xs">
            <p className="text-sm">
              Shop into effortless elegance with Momento
            </p>
            <Button
              variant="link"
              className="p-0 h-auto mt-2 flex items-center gap-1 text-orange-500"
            >
              <span className="text-sm font-medium">Shop Now</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
