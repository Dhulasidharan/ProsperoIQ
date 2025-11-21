"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";

interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    icon: "👥",
    title: "Our Expertise",
    description:
      "Automated GST Compliance, streamline GSTR downloads, ledger analysis, and reconciliation effortlessly.",
    image: "/customer1.png",
  },
  {
    icon: "👥",
    title: "Customs Documentation",
    description:
      "Instantly extract Bills of Entry and Shipping Bill data, even in bulk.",
    image: "/customer1.png",
  },
  {
    icon: "👥",
    title: "Invoice Digitization",
    description:
      "Coming soon: Convert invoices into structured data with OCR technology.",
    image: "/customer1.png",
  },
];

const SECTION_STYLES = {
  backgroundColor: "#FAFAFA",
} as const;

const HEADING_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 590,
  letterSpacing: "0.2px",
  textAlign: "center" as const,
  color: "#7D1C4A",
} as const;

const DESCRIPTION_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 510,
  lineHeight: "30px",
  letterSpacing: "0.2px",
  textAlign: "center" as const,
  color: "#000000",
} as const;

const BUTTON_STYLES = {
  padding: "15px 36px",
  borderRadius: "37px",
  backgroundColor: "#7D1C4A",
  border: "none",
  cursor: "pointer",
  marginRight: "16px",
} as const;

const BUTTON_TEXT_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "22px",
  letterSpacing: "0.2px",
  color: "#FFFFFF",
} as const;

const LEARN_MORE_BUTTON_STYLES = {
  padding: "15px 36px",
  borderRadius: "37px",
  backgroundColor: "transparent",
  border: "2px solid #7D1C4A",
  cursor: "pointer",
} as const;

const LEARN_MORE_TEXT_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "22px",
  letterSpacing: "0.2px",
  color: "#7D1C4A",
} as const;

const CARD_STYLES = {
  borderRadius: "15px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 13px 19px 0px rgba(0, 0, 0, 0.07)",
  transition: "all 0.3s ease",
  cursor: "pointer",
} as const;

const CARD_TITLE_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "32px",
  letterSpacing: "0.1px",
  margin: "0",
  color: "#252B42",
} as const;

const CARD_DESCRIPTION_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.2px",
  margin: "0",
  marginTop: "8px",
} as const;

const CARD_ICON_CONTAINER = {
  width: "64px",
  height: "64px",
  position: "relative" as const,
  marginBottom: "12px",
} as const;

export const PartnerSection: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  return (
    <section
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
      style={SECTION_STYLES}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[45px] leading-tight sm:leading-relaxed max-w-4xl px-4" style={HEADING_STYLES}>
          Your Partner for Effortless Compliance Excellence
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 mb-8 md:mb-12 max-w-2xl px-4" style={DESCRIPTION_STYLES}>
          We know large-scale compliance demands precision and speed, but small
          details are just as critical. Our solutions are crafted to handle both
          efficiently.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
          <button className="px-6 sm:px-9 py-3 sm:py-4 rounded-full transition-all duration-300 hover:opacity-90" style={BUTTON_STYLES}>
            <span className="text-sm font-bold" style={BUTTON_TEXT_STYLES}>Scheduled Demo</span>
          </button>
          <button className="px-6 sm:px-9 py-3 sm:py-4 rounded-full transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white" style={LEARN_MORE_BUTTON_STYLES}>
            <span className="text-sm font-bold" style={LEARN_MORE_TEXT_STYLES}>Learn More</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
          {EXPERTISE_CARDS.map((card, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 md:p-10 flex flex-col gap-3 w-full min-h-[240px]"
              style={{
                ...CARD_STYLES,
                backgroundColor:
                  selectedCardIndex === index ? "#7D1C4A" : "#FFFFFF",
              }}
              onClick={() =>
                setSelectedCardIndex(selectedCardIndex === index ? null : index)
              }
            >
              {/* Image Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative mb-2 md:mb-3">
                <Image
                  src={
                    selectedCardIndex === index ? "/customer.png" : card.image
                  }
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl md:text-2xl"
                style={{
                  ...CARD_TITLE_STYLES,
                  color: selectedCardIndex === index ? "#FFFFFF" : "#252B42",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-base mt-2"
                style={{
                  ...CARD_DESCRIPTION_STYLES,
                  color: selectedCardIndex === index ? "#FFFFFF" : "#000000",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
