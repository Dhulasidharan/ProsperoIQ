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
  width: "272px",
  fontFamily: "SF Pro",
  fontWeight: 590,
  fontSize: "64px",
  lineHeight: "100%",
  letterSpacing: "0%",
  color: "#7D1C4A",
  marginBottom: "24px",
};

const DESCRIPTION_STYLES = {
  width: "424px",
  fontFamily: "SF Pro",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "30px",
  letterSpacing: "4%",
  color: "#53565B",
  marginBottom: "24px",
};

const BUTTON_STYLES = {
  width: "144.59px",
  height: "35.20px",
  borderRadius: "628.02px",
  border: "1px solid #7D1C4A",
  backgroundColor: "transparent",
  color: "#000000",
  padding: "7.54px",
  gap: "7.54px",
  fontFamily: "SF Pro",
  fontWeight: 590,
  fontStyle: "Semibold" as const,
  fontSize: "12.57px",
  lineHeight: "20.12px",
  letterSpacing: "0%",
  cursor: "pointer" as const,
};

const CARD_STYLES = {
  width: "431.41607666015625px",
  height: "311px",
  background: "#FFFFFF",
  borderRadius: "15px",
  boxShadow: "0px 12px 36px 0px #00000040",
  paddingTop: "35px",
  paddingRight: "24px",
  paddingBottom: "14px",
  paddingLeft: "24px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "10px",
  alignItems: "flex-start" as const,
};

const CARD_TITLE_STYLES = {
  width: "251px",
  fontFamily: "SF Pro",
  fontWeight: 700,
  fontSize: "16.55px",
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
      className="w-full px-4 md:px-6 lg:px-12 py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sticky Section Header */}
        <div className="lg:w-1/2" style={STICKY_HEADER_STYLES}>
          <h2 style={HEADING_STYLES}>Our Platforms</h2>
          <p style={DESCRIPTION_STYLES}>
            ProsperoIQ is a smart business solutions platform designed to
            simplify operations, compliance, and financial processes. Our
            AI-powered products help businesses save time, reduce errors, and
            stay compliant with ease
          </p>
          <button
            className="transition-all duration-300 hover:bg-primary hover:text-white font-sf-pro font-semibold text-sm whitespace-nowrap"
            style={BUTTON_STYLES}
          >
            Learn More
          </button>
        </div>

        {/* Vertically Aligned Cards */}
        <div className="flex flex-col gap-10 lg:w-1/2 items-center">
          {PLATFORM_DATA.map((platform: PlatformCard, index: number) => (
            <div key={index} style={CARD_STYLES}>
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-2">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={platform.icon}
                    alt={platform.title}
                    style={{ width: "48px", height: "48px" }}
                  />
                </div>
                <h3 style={CARD_TITLE_STYLES}>{platform.title}</h3>
              </div>
              {/* Features List */}
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  marginTop: "8px",
                }}
              >
                {platform.features.map(
                  (feature: string, featureIndex: number) => (
                    <li
                      key={featureIndex}
                      className="flex gap-3 mb-3"
                      style={{ alignItems: "flex-start" }}
                    >
                      <span style={BULLET_STYLES}>•</span>
                      <span style={FEATURE_TEXT_STYLES}>{feature}</span>
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
