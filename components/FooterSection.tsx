"use client";

import type React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMail, FiSun, FiPhone, FiMapPin } from "react-icons/fi";

const BG_COLOR = "#7D1C4A";
const HEADING_STYLE = {
  fontFamily: "SF Pro",
  fontWeight: 510,
  fontSize: "27.04px",
  lineHeight: "36.06px",
  color: "#F2F2F2",
  marginBottom: "16px",
} as const;
const TEXT_STYLE = {
  fontFamily: "SF Pro",
  fontWeight: 400,
  fontSize: "18.03px",
  lineHeight: "27.04px",
  color: "#CCCCCC",
  marginBottom: "12px",
} as const;
const COPYRIGHT_STYLE = {
  fontFamily: "SF Pro",
  fontWeight: 510,
  fontSize: "22px",
  lineHeight: "20px",
  color: "#FFBF40",
  textAlign: "center" as const,
  marginTop: "24px",
  marginBottom: "0",
} as const;

export const FooterSection: React.FC = () => (
  <footer
    className="w-full flex flex-col items-center justify-center"
    style={{ background: BG_COLOR, padding: "44px 0 0 0" }}
  >
    <div
      className="w-full max-w-7xl mx-auto flex flex-col gap-8"
      style={{ width: "1235px", minHeight: "334px", gap: "32px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <div style={HEADING_STYLE}>Company</div>
          <div style={TEXT_STYLE}>ProsperoIQ Solutions Private Limited</div>
          <div style={TEXT_STYLE}>About Us</div>
          <div style={TEXT_STYLE}>Careers</div>
        </div>
        {/* Policies */}
        <div>
          <div style={HEADING_STYLE}>Policies</div>
          <div style={TEXT_STYLE}>Terms and Conditon</div>
          <div style={TEXT_STYLE}>Privacy policy</div>
          <div style={TEXT_STYLE}>Refund policy</div>
        </div>
        {/* Contact Us */}
        <div>
          <div style={HEADING_STYLE}>Contact Us</div>
          <div className="flex items-center" style={TEXT_STYLE}>
            <FiMail style={{ marginRight: 8 }} /> support@prosperoIQ.com
          </div>
          <div className="flex items-center" style={TEXT_STYLE}>
            <FiSun style={{ marginRight: 8 }} /> www.prosperoiq.com
          </div>
          <div className="flex items-center" style={TEXT_STYLE}>
            <FiPhone style={{ marginRight: 8 }} /> +91 7305372449
          </div>
        </div>
        {/* Stay up to date */}
        <div>
          <div style={HEADING_STYLE}>Stay up to date</div>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your email address"
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                width: "180px",
                fontSize: "16px",
                marginRight: "8px",
              }}
            />
            <button
              style={{
                background: "#F2F2F2",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
              aria-label="Subscribe"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M2 12l20-8-8 20-2-8-8-4z"
                  stroke="#7D1C4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={32} color="#F2F2F2" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={32} color="#F2F2F2" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={32} color="#F2F2F2" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={32} color="#F2F2F2" />
            </a>
          </div>
        </div>
      </div>
      {/* Visit Us */}
      <div
        className="flex items-center mt-8"
        style={{ borderTop: "1px solid #F2F2F2", paddingTop: "24px" }}
      >
        <FiMapPin size={22} color="#F2F2F2" style={{ marginRight: 12 }} />
        <span style={{ ...TEXT_STYLE, color: "#F2F2F2" }}>
          H65,4th Floor 4B, East Avenue, Pushkar Soundary Enclave, Korattur ,
          Tiruvallur, Ambattur, Tamil Nadu 600050
        </span>
      </div>
    </div>
    {/* Copyright */}
    <div style={COPYRIGHT_STYLE}>
      ProsperoIQ Solutions@ 2025. All rights reserved.
    </div>
  </footer>
);
