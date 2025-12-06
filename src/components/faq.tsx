import { useState } from "react";

const faqs = [
  {
    question: "Is Admere really free to use?",
    answer:
      "Yes, Admere is 100% free to use! There are no registration fees, entry fees, or hidden charges. You can participate in unlimited contests without spending a single rupee.",
  },
  {
    question: "How are winners selected?",
    answer:
      "Winners are selected through a combination of public voting, expert panel reviews, and AI-powered assessment to ensure fair and unbiased results. Each contest may have different criteria based on the category.",
  },
  {
    question: "What types of contests are available?",
    answer:
      "We offer contests in various categories including Photography, Dance, Singing, Art, Cooking, Fashion Design, Writing, and many more. New contests are added every week!",
  },
  {
    question: "How do I receive my prize if I win?",
    answer:
      "Prize distribution varies by contest - cash prizes are transferred directly to your bank account, vouchers are sent via email, and physical prizes are delivered to your registered address within 7–14 business days.",
  },
  {
    question: "Can I participate in multiple contests?",
    answer:
      "Absolutely! There's no limit to the number of contests you can enter. Many of our winners participate in multiple contests simultaneously to maximize their chances of winning.",
  },
  {
    question: "Is my content safe on Admere?",
    answer:
      "Your content is protected by our terms of service. You retain all rights to your original work. We only use your submissions for contest purposes with your permission.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about participating in Admere contests
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl shadow-card border border-border"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-5 font-semibold text-foreground hover:text-primary flex items-center justify-between"
              >
                {faq.question}
                <span
                  className={`transition-transform ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
