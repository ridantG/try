import { useEffect, useState, useRef } from "react";
import { Trophy, Users, Award, Coins } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const useCountAnimation = (
  end: number,
  duration: number = 2000,
  startAnimation: boolean
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);

  return count;
};

const StatItem = ({ icon, value, suffix, label, delay }: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  const animatedValue = useCountAnimation(value, 2000, isVisible);

  return (
    <div
      ref={ref}
      className={`text-center p-6 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
        {icon}
      </div>

      <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
        {animatedValue.toLocaleString()}
        {suffix}
      </div>

      <p className="text-gray-500 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      value: 50,
      suffix: "+",
      label: "Live Contests",
      delay: 0,
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 27000,
      suffix: "+",
      label: "Participants",
      delay: 100,
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 22000,
      suffix: "+",
      label: "Winners",
      delay: 200,
    },
    {
      icon: <Coins className="w-8 h-8" />,
      value: 50,
      suffix: "L+",
      label: "Prizes Won",
      delay: 300,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Impact
            </span>{" "}
            in Numbers
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Join thousands of creators who have already discovered success on
            Admere
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
