"use client";

import React from "react";

export const WhoAreWeSection: React.FC = () => {
  return (
    <section
      className="w-full py-8 md:py-12 lg:py-16"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Flex container for title and content */}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {/* Section Title and Content Wrapper */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "flex-start",
            gap: "0",
          }}
        >
          {/* Left column - Title and Box */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "80px",
            }}
          >
            {/* Section Title */}
            <div style={{ marginBottom: "20px" }}>
              <h2
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 590,
                  fontStyle: "normal",
                  fontSize: "42px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#7D1C4A",
                  margin: "0",
                }}
              >
                Who are we
              </h2>
            </div>

            {/* Content Box */}
            <div
              style={{
                width: "100%",
                maxWidth: "617.86px",
                height: "402.60px",
                borderRadius: "18.37px",
                backgroundColor: "#7D1C4A",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Value Delivered Title */}
              <h3
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 590,
                  fontStyle: "normal",
                  fontSize: "20.57px",
                  lineHeight: "49.96px",
                  letterSpacing: "0%",
                  color: "#FFBF40",
                  margin: "0 0 16px 0",
                }}
              >
                Value Delivered
              </h3>

              {/* Description Text */}
              <p
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "22.04px",
                  letterSpacing: "4%",
                  color: "#FFFFFF",
                  margin: "0",
                }}
              >
                At Prosperoiq, we are a dedicated management consulting firm
                committed to driving prosperity for medium to large-sized
                enterprises. We believe that true growth happens when strategy,
                efficiency, and compliance work in perfect harmony. We
                specialize in expert business advisory and process improvement,
                acting as a catalyst for organizations looking to scale. Our
                team partners with you to identify and eliminate operational
                bottlenecks, implement robust risk management platforms, and
                navigate the complexities of regulatory compliance.
              </p>

              {/* Learn More Button */}
              <button
                className="mt-6 px-6 py-2.5 border-2 rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 font-sf-pro font-semibold text-sm whitespace-nowrap self-start"
                style={{
                  width: "144.59px",
                  height: "35.20px",
                  borderRadius: "628.02px",
                  border: "1px solid #FFFFFF",
                  padding: "7.54px",
                  fontFamily: "SF Pro",
                  fontWeight: 590,
                  fontSize: "12.57px",
                  lineHeight: "20.12px",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                  gap: "7.54px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Learn More"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Images Section - Aligned with left box */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: "calc(42px + 20px)",
            }}
          >
            <div className="w-full max-w-md relative">
              {/* Container for overlapping images */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  height: "402.60px",
                }}
              >
                {/* Main Image */}
                <div
                  className="w-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: "100%",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/image.png"
                    alt="Who are we showcase"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Decorative dot pattern */}
                <div
                  className="absolute top-8 right-12 w-20 h-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                    opacity: 0.4,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
