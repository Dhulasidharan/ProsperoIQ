"use client";

import type React from "react";

interface PlatformCard {
  icon: string;
  title: string;
  features: string[];
}

const PLATFORM_DATA: PlatformCard[] = [
  {
    icon: "/GSTIQ.png",
    title: "Download, Recon and Insights",
    features: [
      "Automatically fetches all major GST returns (GSTR-1, 2A, 2B, 3B) from the GST portal, ensuring timely and audit-ready data.",
      "Offers both single and bulk search options to quickly find and validate invoices across multiple vendors for faster reconciliation.",
      "Uses advanced matching to detect discrepancies and optimize input tax credit claims, improving compliance accuracy.",
    ],
  },
  {
    icon: "/complyIQ.png",
    title: "Customs Management",
    features: [
      "Automates extraction from individual bills of entry to speed up customs processing.",
      "Quickly extracts key data from shipping bills for accurate export compliance.",
      "Processes multiple bills of entry simultaneously, saving time and reducing errors.",
    ],
  },
  {
    icon: "/customerIQ.png",
    title: "Compliance Management Platform",
    features: [
      "Calendar of deadlines and alerts with task integration.",
      "Action center for updating status, proof, and comments.",
      "Search and filter records across laws, teams, and sites.",
      "Backend setup of Acts, Owners, Entities, Templates (admin).",
      "Visualize health, trends, and gaps in compliance execution.",
    ],
  },
  {
    icon: "/invoiceIQ.png",
    title: "Invoice Management",
    features: [
      "Transform invoice processing with intelligent OCR, automatic matching, and workflow automation.",
      "Smart invoice capture with AI-powered OCR.",
      "Vendor portal for invoice submission.",
      "Automated Matching - Match purchase orders to invoices and receipts automatically, flagging discrepancies instantly.",
    ],
  },
];

const STICKY_HEADER_STYLES = {
  position: "sticky" as const,
  top: 32,
  alignSelf: "flex-start" as const,
  zIndex: 10,
};

const HEADING_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 590,
  lineHeight: "100%",
  letterSpacing: "0%",
  color: "#7D1C4A",
};

const DESCRIPTION_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 400,
  lineHeight: "30px",
  letterSpacing: "4%",
  color: "#53565B",
};

const BUTTON_STYLES = {
  borderRadius: "628.02px",
  border: "1px solid #7D1C4A",
  backgroundColor: "transparent",
  color: "#000000",
  fontFamily: "SF Pro",
  fontWeight: 590,
  fontStyle: "Semibold" as const,
  letterSpacing: "0%",
  cursor: "pointer" as const,
};

const CARD_STYLES = {
  background: "#FFFFFF",
  borderRadius: "15px",
  boxShadow: "0px 12px 36px 0px #00000040",
};

const CARD_TITLE_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 700,
  lineHeight: "129%",
  letterSpacing: "0%",
  margin: "0",
  color: "#7D1C4A",
};

const BULLET_STYLES = {
  color: "#171A1F",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "1.4",
  flexShrink: 0,
};

const FEATURE_TEXT_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 400,
  fontStyle: "normal" as const,
  fontSize: "12.38px",
  lineHeight: "150%",
  letterSpacing: "4%",
  color: "#171A1F",
  padding: "4px 8px",
  borderRadius: "4px",
  display: "inline-block" as const,
};

export const OurPlatformsSection: React.FC = () => {
  return (
    <section
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Sticky Section Header */}
        <div className="w-full lg:w-1/2" style={STICKY_HEADER_STYLES}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-4 md:mb-6" style={HEADING_STYLES}>Our Platforms</h2>
          <p className="text-base sm:text-lg mb-4 md:mb-6 max-w-md" style={DESCRIPTION_STYLES}>
            ProsperoIQ is a smart business solutions platform designed to
            simplify operations, compliance, and financial processes. Our
            AI-powered products help businesses save time, reduce errors, and
            stay compliant with ease
          </p>
          <button
            className="px-4 sm:px-5 py-2 text-xs sm:text-sm transition-all duration-300 hover:bg-primary hover:text-white font-semibold whitespace-nowrap"
            style={BUTTON_STYLES}
          >
            Learn More
          </button>
        </div>

        {/* Vertically Aligned Cards */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 w-full lg:w-1/2">
          {PLATFORM_DATA.map((platform: PlatformCard, index: number) => (
            <div key={index} className="w-full p-6 md:p-8 flex flex-col gap-3 min-h-[280px]" style={CARD_STYLES}>
              {/* Icon and Title */}
              <div className="flex items-center gap-3 md:gap-4 mb-2">
                <div className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={platform.icon}
                    alt={platform.title}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-[17px]" style={CARD_TITLE_STYLES}>{platform.title}</h3>
              </div>
              {/* Features List */}
              <ul
                className="list-none p-0 m-0 mt-2"
              >
                {platform.features.map(
                  (feature: string, featureIndex: number) => (
                    <li
                      key={featureIndex}
                      className="flex gap-2 md:gap-3 mb-2 md:mb-3 items-start"
                    >
                      <span style={BULLET_STYLES}>•</span>
                      <span className="text-xs sm:text-sm" style={FEATURE_TEXT_STYLES}>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
