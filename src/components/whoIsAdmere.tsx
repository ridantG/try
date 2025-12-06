import { GraduationCap, Home, Palette, Award } from "lucide-react";

const audiences = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Students",
    description:
      "Showcase your academic projects, creative works, and innovative ideas to win scholarships and recognition.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Housewives",
    description:
      "Turn your hobbies into wins! From cooking to crafts, your hidden talents deserve the spotlight.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creators & Businesses",
    description:
      "Amplify your brand, gain followers, and win prizes while building your creative portfolio.",
    color: "bg-pink-100 text-pink-500", // FIXED
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Retired Experts",
    description:
      "Share your lifetime of knowledge and experience. Your expertise is valuable - let it shine!",
    color: "bg-yellow-200 text-yellow-700", // FIXED
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Can{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Participate?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Admere welcomes everyone with a passion to showcase their talent
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${audience.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
              >
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
