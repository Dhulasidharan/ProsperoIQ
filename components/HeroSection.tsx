"use client";

import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

// Fade up animation styles
const fadeUpAnimation = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Prosperity Delivered.",
  buttonText = "Learn More",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  const rotatingWords = [
    "Quick Query",
    "Entry Insights",
    "Invoice Automation",
    "Compliance Empowered",
    "Smart Finance Intelligence",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [rotatingWords.length]);
  return (
    <section className="w-full h-full bg-white flex items-center justify-center px-4 md:px-6 lg:px-12">
      <div className="w-full max-w-7xl">
        {/* Main container with responsive flex layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content section */}
          <div
            className="flex flex-col justify-center"
            style={{ paddingTop: "120px" }}
          >
            {/* Prosperity Delivered Title */}
            <div className="mb-4 md:mb-6">
              <h1
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 590,
                  fontSize: "clamp(32px, 8vw, 45.21px)",
                  lineHeight: "1.15",
                  letterSpacing: "0%",
                  color: "#7D1C4A",
                }}
              >
                {title}
              </h1>
            </div>

            {/* Quick Query Section */}
            <div className="mb-6 md:mb-8">
              {/* Section title with rotating words */}
              <h2
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 510,
                  fontSize: "clamp(24px, 6vw, 32.16px)",
                  lineHeight: "1.2",
                  letterSpacing: "0%",
                  color: "#FFBF40",
                  marginBottom: "16px",
                  minHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <style>{fadeUpAnimation}</style>
                <span
                  style={{
                    display: "inline-block",
                    animation: "fadeUp 0.6s ease-out",
                  }}
                  key={currentWordIndex}
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </h2>

              {/* Description text */}
              <div
                style={{
                  maxWidth: "90%",
                }}
              >
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 400,
                    fontSize: "19.49px",
                    lineHeight: "134%",
                    letterSpacing: "0%",
                    color: "#0F161E",
                    margin: "0 0 8px 0",
                  }}
                >
                  A{" "}
                  <span style={{ color: "#229738", fontWeight: 400 }}>
                    Shreyas Global
                  </span>{" "}
                  Initiative – Driving Growth for Mid
                </p>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 400,
                    fontSize: "19.49px",
                    lineHeight: "134%",
                    letterSpacing: "0%",
                    color: "#0F161E",
                    margin: "0",
                  }}
                >
                  to Large Enterprises.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-4">
              <button
                className="px-6 py-2.5 border-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-white font-sf-pro font-semibold text-xs md:text-sm whitespace-nowrap"
                style={{
                  borderColor: "#7D1C4A",
                  color: "#000000",
                }}
                aria-label={buttonText}
              >
                {buttonText}
              </button>
            </div>
          </div>

          {/* Right side - Illustration from public/hero.svg */}
          <div
            className="hidden lg:flex justify-center items-center"
            style={{ paddingTop: "30px" }}
          >
            <div className="w-full max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.svg"
                alt="ProsperIO ecosystem illustration showing GSTiQ, InvoiceIQ, ComplyIQ, and CustomIQ"
                className="w-full h-auto"
                style={{ paddingTop: "80px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
