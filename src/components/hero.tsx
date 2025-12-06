import { Trophy, Star, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen hero-gradient overflow-hidden pt-24"
    >
      {/* Decorative Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl floating-element" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl floating-element delay-200" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl floating-element delay-300" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 animate-fade-in">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-primary">
                ₹1 Crore+ Prize Money Distributed
              </span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in delay-100">
              Join India's{" "}
              <span className="bg-linear-to-r from-primary via-pink to-accent bg-clip-text text-transparent">
                #1 Free
              </span>{" "}
              <br className="hidden md:block" />
              Online Contest Platform
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in delay-200">
              <span className="font-semibold text-foreground">No Entry Fee,</span>{" "}
              Just Perform & Win! Showcase your talent, compete with thousands,
              and win exciting prizes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition">
                Get Started Free
              </button>

              <button className="px-8 py-4 border border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary/10 transition">
                View Contests
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 animate-fade-in delay-400">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-muted-foreground">
                  4.9/5 Rating
                </span>
              </div>

              <div className="h-6 w-px bg-border" />

              <span className="text-sm font-medium text-muted-foreground">
                27K+ Happy Winners
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in delay-200">

            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl" />

            {/* Image */}
            <div className="relative">
              <img
                src="/assets/photo/Container.png"
                alt="Contest winner celebrating with trophy"
                className="relative z-10 w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
              />

              {/* Floating Stats Card */}
              <div className="absolute -left-4 md:-left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-bounce-gentle z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">50+</p>
                    <p className="text-xs text-muted-foreground">
                      Live Contests
                    </p>
                  </div>
                </div>
              </div>

              {/* Prize Card */}
              <div className="absolute -right-4 md:-right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 animate-bounce-gentle delay-500 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">₹</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">50L+</p>
                    <p className="text-xs text-muted-foreground">
                      Prizes Won
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
