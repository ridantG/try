import { Zap, Shield, Gift, Globe } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "100% Free Entry",
    description:
      "No registration fees, no hidden charges. Just pure talent and competition.",
    gradient: "bg-gradient-to-br from-purple-500 to-indigo-500", // FIXED
    textColor: "text-white",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Fair & Transparent",
    description:
      "AI-powered judging combined with expert panels ensures unbiased results.",
    gradient: "bg-card border border-border", // valid, kept same
    textColor: "text-foreground",
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Real Prizes",
    description:
      "Win cash, vouchers, electronics, and exclusive opportunities with top brands.",
    gradient: "bg-gradient-to-br from-orange-400 to-red-400", // FIXED
    textColor: "text-white",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "National Exposure",
    description:
      "Get discovered by brands, recruiters, and opportunities across India.",
    gradient: "bg-gradient-to-br from-blue-300 to-blue-500", // FIXED
    textColor: "text-white",
  },
];

const WhyDifferentSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Admere
            </span>{" "}
            is Different
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just another contest platform. Here's what sets us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.gradient} rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center mb-4 ${feature.textColor}`}
              >
                {feature.icon}
              </div>

              <h3 className={`text-xl font-bold mb-2 ${feature.textColor}`}>
                {feature.title}
              </h3>

              <p className={`text-sm leading-relaxed ${feature.textColor} opacity-90`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
