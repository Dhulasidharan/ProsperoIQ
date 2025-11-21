"use client";

import React, { useState } from "react";
import Link from "next/link";

// Constants
const NAV_STYLES = {
  container: {
    maxWidth: "955px",
    width: "100%",
    height: "72px",
    borderRadius: "660.55px",
    border: "1.32px solid #DDE1E6",
    boxShadow: "0px 0px 2.64px 0px rgba(0, 0, 0, 0.16)",
  },
  logo: {
    width: "116.92px",
    height: "50.86px",
    aspectRatio: "2.3",
  },
  navLink: {
    fontFamily: "SF Pro",
    fontWeight: 500,
    fontSize: "12.8px",
    lineHeight: "19.2px",
    letterSpacing: "0%",
    color: "#0F161E",
  },
  dropdown: {
    position: "absolute" as const,
    left: "0",
    top: "36px",
    minWidth: "129px",
    width: "max-content",
    backgroundColor: "white",
    border: "1px solid #000000",
    display: "flex",
    flexDirection: "column" as const,
    zIndex: 50,
  },
};

const DROPDOWN_LINK_STYLE = {
  fontFamily: "SF Pro",
  fontSize: "13px",
  fontWeight: 500,
  color: "#7D1C4A",
  backgroundColor: "transparent",
  width: "100%",
  minHeight: "30px",
  padding: "5px 10px",
  border: "1px solid #000000",
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box" as const,
  textDecoration: "none",
  transition: "all 0.15s ease-in-out",
};

const DROPDOWN_ITEMS = {
  Product: ["QSTIQ", "CustomsIQ", "CompllyIQ", "InvoiceIQ"],
  Solutions: [
    "For Tax Consultants",
    "For Accountants",
    "For Compliance",
    "By Industry",
  ],
  Resources: ["About Us", "Careers", "Contact", "Legal Pages"],
  Company: ["About Us", "Careers", "Contact", "Legal Pages"],
};

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
  { label: "Company", href: "#", hasDropdown: true },
];

// Subcomponents
const DropdownLink: React.FC<{ text: string }> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      style={{
        ...DROPDOWN_LINK_STYLE,
        backgroundColor: isHovered ? "#7D1C4A" : "transparent",
        color: isHovered ? "white" : "#7D1C4A",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
};

const DropdownMenu: React.FC<{ label: string }> = ({ label }) => {
  const items = DROPDOWN_ITEMS[label as keyof typeof DROPDOWN_ITEMS];

  if (!items) return null;

  return (
    <div style={NAV_STYLES.dropdown}>
      <div className="flex flex-col" style={{ height: "100%" }}>
        {items.map((item) => (
          <DropdownLink key={item} text={item} />
        ))}
      </div>
    </div>
  );
};

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease-in-out",
    }}
  >
    <path
      d="M1 1L6 6L11 1"
      stroke="#0F161E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Main Component
export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 pt-14 px-4 sm:px-6 max-w-[955px] w-full">
      <div
        className="flex items-center justify-between bg-white rounded-full shadow-md px-6 sm:px-8 md:px-10 py-3 gap-4 md:gap-8"
        style={NAV_STYLES.container}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.svg" alt="ProsperIO Logo" className="w-20 sm:w-24 md:w-[117px] h-auto" style={{ aspectRatio: "2.3" }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
                style={{
                  ...NAV_STYLES.navLink,
                  cursor: item.hasDropdown ? "pointer" : "default",
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronIcon isOpen={openDropdown === item.label} />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && openDropdown === item.label && (
                <DropdownMenu label={item.label} />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button
          className="hidden lg:block px-4 xl:px-5 py-2 rounded-full font-medium text-xs text-white transition-all duration-300 hover:shadow-lg shrink-0 whitespace-nowrap"
          style={{ backgroundColor: "#7D1C4A" }}
        >
          Start a free trial
        </button>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center shrink-0"
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
        <div className="lg:hidden mt-2 pb-4 bg-white rounded-3xl border border-gray-200 mx-auto w-full">
          <div className="flex flex-col gap-3 pt-4 px-6">
            {NAV_ITEMS.map((item) => (
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
