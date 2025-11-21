"use client";

import React from "react";
import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

export const ExploreKeyFeaturesSection: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: "Why Choose Us",
      description:
        "Real time Insights & visibility to business and operations to take timely and effective decisions",
      icon: "ai card.png",
    },
    {
      title: "Proven Expertise",
      description:
        "Industry expertise with proof of years in business and specialized knowledge.",
      icon: "ai card (1).png",
    },
    {
      title: "Our Solutions",
      description:
        "Solutions offered, emphasizing core products or services that address customer needs.",
      icon: "ai card (2).png",
    },
    {
      title: "Trusted by Leaders",
      description:
        "Trusted credentials including awards, partnerships, or client testimonials.",
      icon: "ai card (3).png",
    },
    {
      title: "Get Started Today",
      description:
        "Call to action prompting visitors to sign up, contact, or learn more.",
      icon: "ai card (4).png",
    },
    {
      title: "See the Difference",
      description:
        "Visual impact using engaging graphics and concise messaging to capture attention.",
      icon: "ai card (5).png",
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-12 md:pb-16 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "transparent",
        opacity: 1,
      }}
    >
      {/* Features Grid Container - 3 columns */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto"
      >
        {/* Section Title - As first grid item spanning all columns */}
        <div
          className="col-span-1 sm:col-span-2 lg:col-span-3 mb-4 md:mb-6"
        >
          <h2
            className="text-xl sm:text-2xl md:text-[22px] leading-tight font-semibold"
            style={{
              fontFamily: "SF Pro",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
              color: "#7D1C4A",
              margin: "0",
            }}
          >
            Explore Key Features
          </h2>
        </div>

        {/* Feature Cards */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-xl p-5 md:p-6 flex flex-col gap-4 shadow-lg min-h-[220px]"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 10.31px 30.93px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Icon - No background, just the image */}
            <div
              className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center shrink-0 relative"
            >
              <Image
                src={`/${feature.icon}`}
                alt={feature.title}
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>

            {/* Title */}
            <h3
              className="text-sm sm:text-base font-semibold"
              style={{
                fontFamily: "SF Pro",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
                margin: "0",
                color: "#7D1C4A",
              }}
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className="text-xs sm:text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 400,
                lineHeight: "1.6",
                letterSpacing: "0.01em",
                color: "#000000",
                margin: "0",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
