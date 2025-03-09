import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MomentoBranding() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              It's - about
              <br />
              moments ©24
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full opacity-50"></div>
            </div>
            <Button
              variant="outline"
              className="rounded-full px-4 text-xs flex items-center gap-1"
            >
              LEARN MORE <ArrowRight className="h-3 w-3" />
            </Button>
            <div className="mt-16">
              <p className="text-2xl font-medium">(45%)</p>
              <div className="w-8 h-8 bg-orange-500 mt-4"></div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80"
                alt="Fashion model"
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-4 right-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 bg-white/80 rounded-full"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute top-4 left-4 text-xs text-white">
                <p>@international - going distance 2024</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">[BEST PART]</p>
                <p className="text-sm text-muted-foreground">[01]</p>
                <p className="text-xl font-medium">Jacket (361)</p>
                <p className="text-xl font-medium">Shirt (174)</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-sm">
                To Celebrate
                <br />
                Your Moments
              </p>
              <img
                src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&q=80"
                alt="Fashion product"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
