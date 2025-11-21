"use client";

import type React from "react";
import Image from "next/image";
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
    style={{ background: BG_COLOR, padding: "44px 0 44px 0" }}
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

          <div
            className="flex items-center mb-4"
            style={{
              width: "244.8px",
              height: "32.52px",
              background: "#FFFFFF",
              borderRadius: "6.76px",
              padding: "6.76px 16.9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "56.34px",
            }}
          >
            <input
              type="email"
              className="email-input"
              placeholder="Your email address"
              style={{
                border: "none",
                background: "transparent",
                fontSize: "15.78px",
                fontWeight: 274,
                color: "#000000",
                outline: "none",
                flex: 1,
                fontFamily: "SF Pro",
                lineHeight: "100%",
                width: "140px",
                height: "19px",
              }}
            />

            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                minWidth: "22px",
              }}
              aria-label="Subscribe"
            >
              <Image
                src="/send-2.svg"
                alt="send"
                width={22}
                height={22}
                priority
              />
            </button>
          </div>

          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                style={{ width: 32, height: 32 }}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/insta.png"
                alt="Instagram"
                width={32}
                height={32}
                style={{ width: 32, height: 32 }}
              />
            </a>
            <a href="#" aria-label="Twitter">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width={32}
                height={32}
                style={{ width: 32, height: 32 }}
              />
            </a>
            <a href="#" aria-label="YouTube">
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={32}
                height={32}
                style={{ width: 32, height: 32 }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="flex items-center">
          <span
            style={{
              ...HEADING_STYLE,
              color: "#fff",
              marginBottom: 0,
              marginRight: 16,
            }}
          >
            Visit Us
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "#fff",
              opacity: 0.5,
              marginRight: 0,
            }}
          />
        </div>

        <div className="flex items-center mt-6">
          <Image
            src="/location.png"
            alt="location"
            width={22}
            height={22}
            style={{ width: 22, height: 22, marginRight: 12 }}
          />
          <span style={{ ...TEXT_STYLE, color: "#CCCCCC", marginBottom: 0 }}>
            H65,4th Floor 4B, East Avenue, Pushkar Soundary Enclave, Korattur ,
            Tiruvallur, Ambattur, Tamil Nadu 600050
          </span>
        </div>
      </div>
    </div>

    <div style={COPYRIGHT_STYLE}>
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
