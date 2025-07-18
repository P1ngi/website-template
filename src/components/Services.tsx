import { Camera, Home, Calendar, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Nature Photography",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"
    },
    {
      icon: Home,
      title: "Property Tours",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"
    },
    {
      icon: Calendar,
      title: "Event Coverage",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"
    },
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">what</span>{" "}
            <span className="text-primary">we offer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            She'd earth that midst void creeping him above seas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;