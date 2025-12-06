import { Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,1) 0%, rgba(236,72,153,1) 50%, rgba(16,185,129,1) 100%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float delay-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              Join 27,000+ Winners
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Start Your Creative Journey?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Join India's fastest-growing contest platform today. No fees, no
            hassle — just pure talent and amazing prizes waiting for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/90 transition flex items-center justify-center text-lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>

            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition text-lg">
              Explore Contests
            </button>
          </div>

          {/* Bottom Text */}
          <p className="text-sm text-white/70 mt-6">
            ✓ 100% Free &nbsp;&nbsp; ✓ No Credit Card Required &nbsp;&nbsp; ✓ Instant Access
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
