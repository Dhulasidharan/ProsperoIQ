"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface TrustPoint {
  icon: string;
  text: string;
}

const TRUST_POINTS: TrustPoint[] = [
  { icon: "•", text: "20+ Active Users managing compliance across India" },
  { icon: "•", text: "₹1 Crore+ in monthly transactions processed" },
  { icon: "•", text: "99.99% Accuracy in GST reconciliation" },
  { icon: "•", text: "24/7 Dedicated Support from ProsperoIQ team" },
  { icon: "•", text: "80% Reduction in manual reconciliation time" },
  { icon: "•", text: "95%+ Accuracy in automated data matching" },
  { icon: "•", text: "Instant bulk downloads and data access across GSTINs" },
  { icon: "•", text: "Centralized management of government notices" },
];

const GALLERY_IMAGES = [
  { src: "/image1.png", alt: "ProsperoIQ trust metric 1" },
  { src: "/image2.png", alt: "ProsperoIQ trust metric 2" },
  { src: "/image3.png", alt: "ProsperoIQ trust metric 3" },
];

const BOX_STYLES = {
  borderRadius: "5px",
  opacity: 0.8,
  backgroundColor: "#7D1C4A",
} as const;

const HEADING_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 700,
  lineHeight: "100%",
  letterSpacing: "0%",
  color: "#FFCE56",
} as const;

const FEATURE_TEXT_STYLES = {
  fontFamily: "SF Pro",
  fontWeight: 400,
  lineHeight: "150%",
  letterSpacing: "4%",
  color: "#FFFFFF",
} as const;

const FEATURE_ITEM_STYLES = {
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
  marginBottom: "16px",
} as const;

const BULLET_STYLES = {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "20px",
  flexShrink: 0,
  lineHeight: "1",
} as const;

const PROGRESS_BAR_CONTAINER = {
  height: "12px",
} as const;

const IMAGE_CONTAINER_STYLES = {
  backgroundImage: "url('/Rectangle.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
} as const;

const SECTION_STYLES = {
  backgroundColor: "#000000",
  backgroundImage: "url('/Rectangle.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
} as const;

export const WhyBusinessesTrustSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 relative"
      style={SECTION_STYLES}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 0 }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-stretch justify-center">
          {/* Left Box - Trust Points */}
          <div style={BOX_STYLES} className="flex flex-col p-6 sm:p-8 md:p-10 w-full lg:w-1/2 lg:max-w-[507px]">
            <h2 className="text-2xl sm:text-3xl md:text-[30px] mb-4 md:mb-6" style={HEADING_STYLES}>Why Businesses Trust ProsperoIQ</h2>

            {/* Features List */}
            <div className="text-sm sm:text-base md:text-lg" style={FEATURE_TEXT_STYLES}>
              {TRUST_POINTS.map((point, index) => (
                <div key={index} style={FEATURE_ITEM_STYLES}>
                  <span style={BULLET_STYLES}>{point.icon}</span>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Box - Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-4">
            {/* Image Container with Rectangle Background */}
            <div
              className="relative overflow-hidden rounded-lg flex items-center justify-center w-full aspect-square max-w-[431px]"
              style={IMAGE_CONTAINER_STYLES}
            >
              <Image
                src={GALLERY_IMAGES[currentImageIndex].src}
                alt={GALLERY_IMAGES[currentImageIndex].alt}
                fill
                className="object-cover"
                priority
              />

              {/* Progress Bar Indicator */}
              <ProgressBar currentImageIndex={currentImageIndex} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProgressBarProps {
  currentImageIndex: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentImageIndex }) => (
  <>
    <div
      className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-0 w-32 sm:w-48 md:w-[200px]"
      style={PROGRESS_BAR_CONTAINER}
    >
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="flex-1 h-full overflow-hidden"
          style={{
            backgroundColor:
              index === currentImageIndex ? "#7D1C4A" : "#FFFFFF",
          }}
        >
          {index === currentImageIndex && (
            <div
              className="h-full"
              style={{
                backgroundColor: "#7D1C4A",
                animation: `progress-fill 3000ms linear forwards`,
              }}
            />
          )}
        </div>
      ))}
    </div>
    <style jsx>{`
      @keyframes progress-fill {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }
    `}</style>
  </>
);
