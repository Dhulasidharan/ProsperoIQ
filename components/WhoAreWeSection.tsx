"use client";

import React from "react";
import Image from "next/image";

export const WhoAreWeSection: React.FC = () => {
  return (
    <section
      className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Flex container for title and content */}
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-5 md:mb-6">
          <h2
            className="text-3xl sm:text-4xl md:text-[42px] leading-tight font-semibold"
            style={{
              fontFamily: "SF Pro",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
              color: "#7D1C4A",
              margin: "0",
            }}
          >
            Who are we
          </h2>
        </div>

        {/* Content Wrapper - Grid with equal height items */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center"
        >
          {/* Left column - Content Box */}
          <div
            className="w-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full"
            style={{
              maxWidth: "617.86px",
              borderRadius: "18.37px",
              backgroundColor: "#7D1C4A",
              minHeight: "400px",
            }}
          >
              {/* Value Delivered Title */}
              <h3
                className="text-lg sm:text-xl font-semibold"
                style={{
                  fontFamily: "SF Pro",
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em",
                  color: "#FFBF40",
                  margin: "0 0 16px 0",
                }}
              >
                Value Delivered
              </h3>

              {/* Description Text */}
              <p
                className="text-sm sm:text-base"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "1.7",
                  letterSpacing: "0.01em",
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
                className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-2.5 border rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 font-semibold text-xs sm:text-sm whitespace-nowrap self-start flex items-center justify-center"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 590,
                  border: "1px solid #FFFFFF",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                }}
                aria-label="Learn More"
              >
                Learn More
              </button>
          </div>

          {/* Right - Images Section - Same height as left box */}
          <div
            className="flex justify-center items-center w-full h-full"
          >
            <div className="w-full max-w-md lg:max-w-full relative h-full flex items-center justify-center" style={{ minHeight: "400px" }}>
              {/* Container for overlapping images */}
              <div
                className="relative flex items-center justify-center w-full h-full"
              >
                {/* Main Image */}
                <div
                  className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative"
                  style={{
                    backgroundColor: "#FFFFFF",
                    minHeight: "400px",
                  }}
                >
                  <Image
                    src="/image.png"
                    alt="Who are we showcase"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                  />
                </div>

                {/* Decorative dot pattern */}
                <div
                  className="absolute top-8 right-8 lg:right-12 w-16 h-16 lg:w-20 lg:h-20 pointer-events-none"
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
