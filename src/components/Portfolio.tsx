import { useState } from "react";
import { Button } from "@/components/ui/button";
import portfolioImage from "@/assets/portfolio-grid.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "all" },
    { id: "photography", label: "Photography" },
    { id: "drawing", label: "Drawing" },
    { id: "animatic", label: "Animatic" },
    { id: "edits", label: "Edits" },
  ];

  const portfolioItems = [
    { id: 1, category: "photography", title: "Portrait Session", image: portfolioImage },
    { id: 2, category: "photography", title: "Wedding Photography", image: portfolioImage },
    { id: 3, category: "drawing", title: "Digital Illustration", image: portfolioImage },
    { id: 4, category: "drawing", title: "Character Design", image: portfolioImage },
    { id: 5, category: "animatic", title: "Story Boarding", image: portfolioImage },
    { id: 6, category: "animatic", title: "Motion Graphics", image: portfolioImage },
    { id: 7, category: "edits", title: "Photo Retouching", image: portfolioImage },
    { id: 8, category: "edits", title: "Color Grading", image: portfolioImage },
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Check</span>{" "}
            <span className="text-primary">Recent Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            She'd earth that midst void creeping him above seas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="lowercase text-sm"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/80 transition-all duration-300 flex items-end">
                <div className="p-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-primary uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;