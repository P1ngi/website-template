import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Natural Light Photography",
      excerpt: "Discover how to harness natural light to create stunning portraits and landscapes that capture the essence of your subjects.",
      author: "Sunny",
      date: "March 15, 2024",
      image: "/lovable-uploads/3808693c-0780-46d0-b7f9-b3ad808315ca.png",
    },
    {
      id: 2,
      title: "Wedding Photography: Capturing Timeless Moments",
      excerpt: "Learn the techniques and approaches that help preserve the magic and emotion of your special day through professional photography.",
      author: "Sunny",
      date: "March 8, 2024",
      image: "/lovable-uploads/d1ff5244-53bb-409b-aff5-61f41c7b9028.png",
    },
    {
      id: 3,
      title: "Portrait Photography Tips for Beginners",
      excerpt: "Essential tips and techniques for creating compelling portraits that tell a story and connect with your audience.",
      author: "Sunny",
      date: "February 28, 2024",
      image: "/lovable-uploads/3808693c-0780-46d0-b7f9-b3ad808315ca.png",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and stories from behind the lens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="outline" className="group/btn">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;