"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  { question: "Do you sign NDAs?", answer: "Yes. Every partnership starts with a signed NDA to protect your brand and your clients." },
  { question: "Will you ever contact our client directly?", answer: "Never. We stay invisible and only communicate with your team." },
  { question: "Can we white label your maintenance services too?", answer: "Absolutely. We offer ongoing WordPress maintenance under your branding." },
  { question: "Do you offer custom plugin development?", answer: "Yes, we develop and customize plugins based on your project requirements." },
  { question: "How do you handle revisions?", answer: "We include up to 2 to 3 revision rounds depending on the package, with fast turn around." },
  { question: "How do we manage communication?", answer: "We can use email, Slack  or your project management tool. Whatever suits you best." },
  { question: "Do you offer emergency support?", answer: "Yes. Our advanced plans include 24/7 uptime monitoring and emergency support." },
  { question: "Can you handle WooCommerce stores too?", answer: "Absolutely. We’re experienced with eCommerce and complex WooCommerce builds." },
  { question: "Can you follow specific coding standards or frameworks?", answer: "Yes, our developers are flexible and well-versed in various frameworks and agency-specific workflows. We follow your coding conventions." },
  { question: "Can we request white label documentation or handoff guides?", answer: "Of course. We can prepare handoff documentation, user guides, or admin training—all branded as your own." },
  { question: "How do we track the progress of ongoing projects?", answer: "We provide weekly updates and can integrate with your project management system (like Trello, Asana, or ClickUp)." },
  { question: "Is there a minimum commitment required to get started?", answer: "No minimums. Start with one site, or commit to a plan—scale up as your needs grow." },
  { question: "Can you help with performance or speed audits post-build?", answer: "Yes. Our team can audit existing websites or post-build launches to identify speed, SEO, and usability improvements." },
];

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState([]); // store multiple open indices

  const toggleFaq = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // close if already open
        : [...prev, index] // open new one
    );
  };

  return (
    <section>
      <div className="px-[15px] py-[100px] min-[479px]:p-[30px]">
        <div className="mx-auto w-full max-w-[940px]">
          <h3
            className="text-[28px] text-[#333] font-[700] leading-[30px] text-center mt-[20px] mb-[10px]"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            White Label Webflow Development FAQ
          </h3>

          <div className="mt-[50px]" style={{ fontFamily: "var(--font-opensans)" }}>
            {faqs.map((faq, index) => (
              <div key={index} className="px-[30px] pt-[24px] pb-[14px] mb-[20px] shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                >
                  <h4
                    className={`transition-colors duration-300 text-[18px] font-[400] mb-[15px] w-full ${
                      openIndices.includes(index) ? "text-[#ED8104]" : "text-black"
                    }`} style={{fontFamily:"var(--open-sans)",}}
                  >
                      {faq.question}
                  </h4>
                  <FiChevronDown
                    className={`h-[30px] w-[32px] transition-transform duration-300 text-[#0009] ${
                      openIndices.includes(index) ? "rotate-180" : ""
                    }`}
                    
                  />
                </button>

                {/* Animated Answer */}
                <div
                  className={`text-[14px] leading-[20px] text-[#333]  overflow-hidden transition-all duration-300 ${
                    openIndices.includes(index) ? "max-h-40 py-3" : "max-h-0"
                  } `}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
