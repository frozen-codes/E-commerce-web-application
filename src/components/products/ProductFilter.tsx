import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSection {
  id: string;
  name: string;
  options: FilterOption[];
}

const categories: FilterOption[] = [
  { id: "womens", label: "Women's Fashion" },
  { id: "mens", label: "Men's Fashion" },
  { id: "accessories", label: "Accessories" },
  { id: "footwear", label: "Footwear" },
];

const sizes: FilterOption[] = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "xxl", label: "XXL" },
];

const colors: FilterOption[] = [
  { id: "black", label: "Black" },
  { id: "white", label: "White" },
  { id: "blue", label: "Blue" },
  { id: "red", label: "Red" },
  { id: "green", label: "Green" },
  { id: "yellow", label: "Yellow" },
];

interface ProductFilterProps {
  onFilterChange?: (filters: any) => void;
  className?: string;
}

export default function ProductFilter({
  onFilterChange,
  className = "",
}: ProductFilterProps = {}) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    categories: true,
    price: true,
    sizes: true,
    colors: true,
  });
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    categories: [],
    sizes: [],
    colors: [],
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleFilter = (sectionId: string, filterId: string) => {
    setSelectedFilters((prev) => {
      const currentFilters = [...(prev[sectionId] || [])];
      const filterIndex = currentFilters.indexOf(filterId);

      if (filterIndex === -1) {
        currentFilters.push(filterId);
      } else {
        currentFilters.splice(filterIndex, 1);
      }

      const newFilters = {
        ...prev,
        [sectionId]: currentFilters,
      };

      if (onFilterChange) {
        onFilterChange({
          ...newFilters,
          priceRange,
        });
      }

      return newFilters;
    });
  };

  const handlePriceChange = (value: number[]) => {
    const newPriceRange: [number, number] = [value[0], value[1]];
    setPriceRange(newPriceRange);

    if (onFilterChange) {
      onFilterChange({
        ...selectedFilters,
        priceRange: newPriceRange,
      });
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      sizes: [],
      colors: [],
    });
    setPriceRange([0, 500]);

    if (onFilterChange) {
      onFilterChange({
        categories: [],
        sizes: [],
        colors: [],
        priceRange: [0, 500],
      });
    }
  };

  const renderFilterSection = (
    sectionId: string,
    name: string,
    options: FilterOption[],
  ) => {
    const isExpanded = expandedSections[sectionId];
    const selectedOptions = selectedFilters[sectionId] || [];

    return (
      <div className="py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection(sectionId)}
        >
          <h3 className="text-sm font-medium">{name}</h3>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
        {isExpanded && (
          <div className="mt-4 space-y-2">
            {options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`${sectionId}-${option.id}`}
                  checked={selectedOptions.includes(option.id)}
                  onCheckedChange={() => toggleFilter(sectionId, option.id)}
                />
                <label
                  htmlFor={`${sectionId}-${option.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderPriceFilter = () => {
    const isExpanded = expandedSections.price;

    return (
      <div className="py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="text-sm font-medium">Price Range</h3>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
        {isExpanded && (
          <div className="mt-6 px-2">
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              value={priceRange}
              onValueChange={handlePriceChange}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const countActiveFilters = () => {
    return Object.values(selectedFilters).reduce(
      (count, filters) => count + filters.length,
      0,
    );
  };

  return (
    <>
      {/* Mobile filter dialog */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setMobileFiltersOpen(true)}
        >
          Filters
          {countActiveFilters() > 0 && (
            <span className="ml-1 rounded-full bg-primary text-primary-foreground px-2 py-0.5 text-xs">
              {countActiveFilters()}
            </span>
          )}
        </Button>

        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-background">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-medium">Filters</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                {renderFilterSection("categories", "Categories", categories)}
                <Separator />
                {renderPriceFilter()}
                <Separator />
                {renderFilterSection("sizes", "Sizes", sizes)}
                <Separator />
                {renderFilterSection("colors", "Colors", colors)}
              </div>
              <div className="p-4 border-t flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearAllFilters}
                >
                  Clear All
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop filter sidebar */}
      <div className={`hidden lg:block ${className}`}>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Filters</h2>
            {countActiveFilters() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs"
                onClick={clearAllFilters}
              >
                Clear All
              </Button>
            )}
          </div>
          <Separator />
          {renderFilterSection("categories", "Categories", categories)}
          <Separator />
          {renderPriceFilter()}
          <Separator />
          {renderFilterSection("sizes", "Sizes", sizes)}
          <Separator />
          {renderFilterSection("colors", "Colors", colors)}
        </div>
      </div>
    </>
  );
}
