import { useState, useEffect } from "react";

const contests = [
  {
    id: 1,
    title: "Best Food Photography",
    category: "Photography",
    prize: "₹50,000",
    participants: 1234,
    endDate: new Date(Date.now() + 3 * 86400000),
    image: "/assets/photo/Container.png", // FIXED
    color: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    title: "Dance Challenge 2024",
    category: "Dance",
    prize: "₹75,000",
    participants: 2567,
    endDate: new Date(Date.now() + 5 * 86400000),
    image: "/assets/photo/Container.png",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "Singing Star India",
    category: "Music",
    prize: "₹1,00,000",
    participants: 3891,
    endDate: new Date(Date.now() + 7 * 86400000),
    image: "/assets/photo/Container.png",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 4,
    title: "Best Art Creation",
    category: "Art",
    prize: "₹40,000",
    participants: 892,
    endDate: new Date(Date.now() + 2 * 86400000),
    image: "/assets/photo/Container.png",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 5,
    title: "Fashion Design Contest",
    category: "Fashion",
    prize: "₹60,000",
    participants: 1567,
    endDate: new Date(Date.now() + 4 * 86400000),
    image: "/assets/photo/Container.png",
    color: "from-pink-400 to-rose-500",
  },
];

const formatTimeLeft = (endDate: Date) => {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return `${days}d ${hours}h left`;
};

const ContestsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = Math.max(0, contests.length - itemsToShow);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section id="contests" className="py-20 bg-[#F9F7FF]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Featured{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
                Contests
              </span>
            </h2>
            <p className="text-gray-500">
              Discover exciting competitions and start your winning journey today.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-orange-500 hover:text-white transition disabled:opacity-40"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4L6 10L12 16" />
              </svg>
            </button>

            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-orange-500 hover:text-white transition disabled:opacity-40"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 4L14 10L8 16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {contests.map((contest) => (
              <div key={contest.id} className="shrink-0 w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition group">

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={contest.image}
                      alt={contest.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${contest.color} opacity-60`}
                    />

                    {/* Category */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold rounded-full">
                      {contest.category}
                    </div>

                    {/* Time Left */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="7" cy="7" r="5" />
                        <path d="M7 4v3l2 1" />
                      </svg>
                      {formatTimeLeft(contest.endDate)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition">
                      {contest.title}
                    </h3>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 14c0-2-4-3-6-3s-6 1-6 3" />
                          <circle cx="10" cy="6" r="3" />
                        </svg>
                        {contest.participants.toLocaleString()} joined
                      </div>

                      <div className="flex items-center gap-2 text-orange-600 font-bold">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 3h10v3a4 4 0 0 1-4 4v2h2v2H7v-2h2V10a4 4 0 0 1-4-4V3z" />
                        </svg>
                        {contest.prize}
                      </div>
                    </div>

                    <button className="w-full py-2 border border-gray-300 rounded-full hover:bg-orange-500 hover:text-white transition font-medium">
                      Join Contest
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold shadow-md hover:opacity-90 transition">
            View All Contests
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContestsSection;
