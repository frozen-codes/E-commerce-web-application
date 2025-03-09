import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FeaturedSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
              alt="Summer collection showcase"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <div className="inline-block rounded-lg bg-muted-foreground/10 px-3 py-1 text-sm">
              Featured Collection
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Summer Essentials
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our curated collection of summer essentials designed to
              keep you stylish and comfortable all season long.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link to="/collection/summer-essentials">Shop Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
