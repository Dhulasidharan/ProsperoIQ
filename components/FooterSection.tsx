"use client";

import type React from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMail, FiSun, FiPhone, FiMapPin } from "react-icons/fi";

const BG_COLOR = "#7D1C4A";
const HEADING_STYLE = {
  fontFamily: "SF Pro",
  fontWeight: 500,
  color: "#F2F2F2",
} as const;
const TEXT_STYLE = {
  fontFamily: "SF Pro",
  fontWeight: 400,
  color: "#CCCCCC",
} as const;
const COPYRIGHT_STYLE = {
  fontFamily: "SF Pro",
  fontWeight: 500,
  color: "#FFBF40",
  textAlign: "center" as const,
} as const;

export const FooterSection: React.FC = () => (
  <footer
    className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12"
    style={{ background: BG_COLOR }}
  >
    <div
      className="w-full max-w-7xl mx-auto flex flex-col gap-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Company */}
        <div>
          <div className="text-xl sm:text-2xl md:text-[27px] leading-tight mb-3 md:mb-4" style={HEADING_STYLE}>Company</div>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3 cursor-pointer hover:text-white transition-colors" style={TEXT_STYLE}>ProsperoIQ Solutions Private Limited</div>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3 cursor-pointer hover:text-white transition-colors" style={TEXT_STYLE}>About Us</div>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3 cursor-pointer hover:text-white transition-colors" style={TEXT_STYLE}>Careers</div>
        </div>

        {/* Policies */}
        <div>
          <div className="text-xl sm:text-2xl md:text-[27px] leading-tight mb-3 md:mb-4" style={HEADING_STYLE}>Policies</div>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3 cursor-pointer hover:text-white transition-colors" style={TEXT_STYLE}>Terms and Conditon</div>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3 cursor-pointer hover:text-white transition-colors" style={TEXT_STYLE}>Privacy policy</div>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3 cursor-pointer hover:text-white transition-colors" style={TEXT_STYLE}>Refund policy</div>
        </div>

        {/* Contact Us */}
        <div>
          <div className="text-xl sm:text-2xl md:text-[27px] leading-tight mb-3 md:mb-4" style={HEADING_STYLE}>Contact Us</div>
          <div className="flex items-center text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3" style={TEXT_STYLE}>
            <FiMail className="mr-2 shrink-0" size={16} />
            <span className="break-all">support@prosperoIQ.com</span>
          </div>
          <div className="flex items-center text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3" style={TEXT_STYLE}>
            <FiSun className="mr-2 shrink-0" size={16} />
            <span className="break-all">www.prosperoiq.com</span>
          </div>
          <div className="flex items-center text-sm sm:text-base md:text-lg leading-relaxed mb-2 md:mb-3" style={TEXT_STYLE}>
            <FiPhone className="mr-2 shrink-0" size={16} /> +91 7305372449
          </div>
        </div>

        {/* Stay up to date */}
        <div>
          <div className="text-xl sm:text-2xl md:text-[27px] leading-tight mb-3 md:mb-4" style={HEADING_STYLE}>Stay up to date</div>

          <div
            className="flex items-center mb-4 w-full max-w-[245px] bg-white rounded-lg p-2 sm:p-2.5"
          >
            <input
              type="email"
              className="email-input flex-1 min-w-0 text-sm sm:text-base"
              placeholder="Your email address"
              style={{
                border: "none",
                background: "transparent",
                color: "#000000",
                outline: "none",
                fontFamily: "SF Pro",
              }}
            />

            <button
              className="bg-transparent border-none cursor-pointer flex items-center justify-center p-0 ml-2 shrink-0"
              aria-label="Subscribe"
            >
              <Image
                src="/send-2.svg"
                alt="send"
                width={20}
                height={20}
                className="w-5 h-5"
                priority
              />
            </button>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <Image
                src="/insta.png"
                alt="Instagram"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 w-full">
        <div className="flex items-center mb-4 md:mb-6">
          <span
            className="text-lg sm:text-xl md:text-2xl font-medium text-white whitespace-nowrap mr-3 md:mr-4"
            style={{
              ...HEADING_STYLE,
              color: "#fff",
            }}
          >
            Visit Us
          </span>
          <div className="flex-1 h-px bg-white opacity-50" />
        </div>

        <div className="flex items-start gap-2 md:gap-3">
          <Image
            src="/location.png"
            alt="location"
            width={20}
            height={20}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <span className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ ...TEXT_STYLE, color: "#CCCCCC" }}>
            H65, 4th Floor 4B, East Avenue, Pushkar Soundary Enclave, Korattur, Tiruvallur, Ambattur, Tamil Nadu 600050
          </span>
        </div>
      </div>
    </div>

    <div className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-tight text-center mt-6 md:mt-8 px-4" style={COPYRIGHT_STYLE}>
      ProsperoIQ Solutions@ 2025. All rights reserved.
    </div>

    {/* FIX ADDED HERE */}
    <style>{`
      .email-input::placeholder {
        color: #000000;
        opacity: 1;
      }
    `}</style>
  </footer>
);
