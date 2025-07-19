import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Header spacing */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center bg-card border-border">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src="/lovable-uploads/3808693c-0780-46d0-b7f9-b3ad808315ca.png"
                  alt="Sunny He"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <div className="mb-4">
              <span className="text-primary text-lg font-medium tracking-wide">Artist</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Sunny He
            </h1>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-border mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I really like drawing blah blah blah im lazy rn maybe later hehe
            </p>

            {/* Back and Get in touch buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="outline" size="lg" className="gap-2" onClick={() => navigate("/")}>
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Get in touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;