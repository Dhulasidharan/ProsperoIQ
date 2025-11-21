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
  width: "695px",
  fontFamily: "SF Pro",
  fontWeight: 590,
  fontSize: "45px",
  lineHeight: "80px",
  letterSpacing: "0.2px",
  textAlign: "center" as const,
  color: "#7D1C4A",
} as const;

const DESCRIPTION_STYLES = {
  width: "585px",
  fontFamily: "SF Pro",
  fontWeight: 510,
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "0.2px",
  textAlign: "center" as const,
  color: "#000000",
  marginTop: "24px",
  marginBottom: "48px",
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
  paddingTop: "20px",
  paddingBottom: "14px",
  paddingRight: "40px",
  paddingLeft: "40px",
  width: "328px",
  minHeight: "241.53px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "10px",
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
      className="w-full px-4 md:px-6 lg:px-12 py-16 md:py-20 lg:py-24"
      style={SECTION_STYLES}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 style={HEADING_STYLES}>
          Your Partner for Effortless Compliance Excellence
        </h2>

        {/* Description */}
        <p style={DESCRIPTION_STYLES}>
          We know large-scale compliance demands precision and speed, but small
          details are just as critical. Our solutions are crafted to handle both
          efficiently.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button style={BUTTON_STYLES}>
            <span style={BUTTON_TEXT_STYLES}>Scheduled Demo</span>
          </button>
          <button style={LEARN_MORE_BUTTON_STYLES}>
            <span style={LEARN_MORE_TEXT_STYLES}>Learn More</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="w-full flex flex-wrap justify-center gap-8">
          {EXPERTISE_CARDS.map((card, index) => (
            <div
              key={index}
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
              <div style={CARD_ICON_CONTAINER}>
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
                style={{
                  ...CARD_TITLE_STYLES,
                  color: selectedCardIndex === index ? "#FFFFFF" : "#252B42",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
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
