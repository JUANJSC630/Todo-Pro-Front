import React, { ReactNode, useState, useRef, useEffect } from "react";

interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAccordionFocused, setIsAccordionFocused] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setIsAccordionFocused(false);
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setIsAccordionFocused(true);
  };

  return (
    <div ref={accordionRef} className="w-full md:w-2/4 lg:w-2/6 mx-auto">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className={`w-full text-gray-400 p-4 text-left border-2 border-red-700 bg-gray-900 focus:outline-none rounded-2xl hover:bg-gray-800 ${activeIndex === index ? "hidden" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div
              className={`mt-2 ${isAccordionFocused ? "visible" : "hidden"}`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
