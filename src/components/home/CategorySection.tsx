import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: "1",
    name: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80",
    slug: "womens-fashion",
  },
  {
    id: "2",
    name: "Men's Fashion",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80",
    slug: "mens-fashion",
  },
  {
    id: "3",
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
    slug: "accessories",
  },
  {
    id: "4",
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
    slug: "footwear",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Shop by Category
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our wide range of categories to find exactly what you're
              looking for.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
