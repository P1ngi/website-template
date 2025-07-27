import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
const heroImage = "/lovable-uploads/d1ff5244-53bb-409b-aff5-61f41c7b9028.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">i am</span>
                <br />
                <span className="text-primary">little artist</span>
                <br />
                <span className="text-foreground">Photographer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                IT SEASONS. BEARING IN ONE YEARS FORTH SAYING
              </p>
            </div>

            <Button 
              variant="photography" 
              size="xl" 
              className="uppercase tracking-wider"
              onClick={() => window.open('https://username-taken-site.vercel.app/home', '_blank')}
            >
              Back to Main Page
            </Button>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <a 
                href="https://www.instagram.com/p1ngi_/"
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Right side - Image space (the background image fills this area) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <div className="w-0.5 h-16 bg-muted-foreground/30"></div>
          <span className="text-xs font-medium">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;