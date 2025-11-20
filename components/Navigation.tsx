"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Product", href: "#", hasDropdown: true },
    { label: "Solutions", href: "#", hasDropdown: true },
    { label: "Resources", href: "#", hasDropdown: true },
    { label: "Pricing", href: "#" },
    { label: "Company", href: "#", hasDropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pt-14">
      <div
        className="flex items-center justify-between bg-white rounded-full shadow-md"
        style={{
          width: "955px",
          height: "72px",
          paddingLeft: "33.6px",
          paddingRight: "52.84px",
          paddingTop: "10.57px",
          paddingBottom: "10.57px",
          gap: "41.6px",
          borderRadius: "660.55px",
          border: "1.32px solid #DDE1E6",
          boxShadow: "0px 0px 2.64px 0px rgba(0, 0, 0, 0.16)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="ProsperIO Logo"
            style={{
              width: "116.92px",
              height: "50.86px",
              aspectRatio: "2.3",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                className="flex items-center gap-1 transition-colors hover:text-primary"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "12.8px",
                  lineHeight: "19.2px",
                  letterSpacing: "0%",
                  color: "#0F161E",
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/dropdown.svg"
                      alt="dropdown"
                      className="w-3 h-3"
                    />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button
          className="hidden md:block px-5 py-2 rounded-full font-medium text-xs text-white transition-all duration-300 hover:shadow-lg shrink-0"
          style={{ backgroundColor: "#7D1C4A" }}
        >
          Start a free trial
        </button>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center shrink-0"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 pb-4 bg-white rounded-3xl border border-gray-200 mx-auto">
          <div className="flex flex-col gap-3 pt-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="w-full mt-4 px-4 py-2 rounded-full font-medium text-xs text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "#7D1C4A" }}
            >
              Start a free trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
