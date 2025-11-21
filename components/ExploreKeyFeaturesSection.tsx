"use client";

import React from "react";

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
      className="w-full"
      style={{
        backgroundColor: "transparent",
        paddingBottom: "64px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
      }}
    >
      {/* Features Grid Container - 3 columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px 30px",
          width: "100%",
          maxWidth: "1024px",
          margin: "0 auto",
        }}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Section Title - As first grid item spanning all columns */}
        <div
          style={{
            gridColumn: "1 / -1",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontFamily: "SF Pro",
              fontWeight: 590,
              fontStyle: "normal",
              fontSize: "22.33px",
              lineHeight: "100%",
              letterSpacing: "0%",
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
            style={{
              width: "308.39px",
              height: "219.91px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 10.31px 30.93px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "12.89px",
              padding: "20.62px",
              display: "flex",
              flexDirection: "column",
              gap: "18.9px",
            }}
          >
            {/* Icon - No background, just the image */}
            <div
              style={{
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/${feature.icon}`}
                alt={feature.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "SF Pro",
                fontWeight: 510,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "129%",
                letterSpacing: "0%",
                margin: "0",
                color: "#7D1C4A",
              }}
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "SF Pro",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "156%",
                letterSpacing: "0%",
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
