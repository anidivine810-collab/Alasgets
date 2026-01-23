import React from 'react';
import { 
  FaFacebook, FaTwitter, FaInstagram, 
  FaWhatsapp, FaTelegramPlane 
} from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-12 lg:px-20 xl:px-40 py-12 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            AlasDgets : Your best choice for Online Shopping
          </h1>
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-4">What is AlasDgets?</h2>
            <p className="text-gray-400 leading-relaxed">
              AlasDgets is a Nigerian cross-border electronic commerce platform. 
              Your premier destination for the latest gadgets in Nigeria. 
              Explore, shop, and get amazing deals on top-quality devices, 
              all from the comfort of your home. From smartphones to smart home tech, we've got you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-16">
          {/* Column 1 */}
          <FooterColumn 
            title="Customer Service"
            items={[
              "Help Center",
              "Transaction Service Agreement",
              "Terms and Conditions for Customers",
              "Take Our Feedback Survey"
            ]}
          />

          {/* Column 2 */}
          <FooterColumn 
            title="Shop with Us"
            items={[
              "Make payments",
              "Delivery Options",
              "Buyer Protection"
            ]}
          />

          {/* Column 3 */}
          <FooterColumn 
            title="Collaborate with Us"
            items={[
              "Partnerships",
              "Affiliate Program",
              "DS Center",
              "Seller Log In",
              "中国卖家入驻",
              "Non-Chinese Seller Registration",
              "Solution Partner Program",
              "Become a payment partner with us"
            ]}
          />

          {/* Payment Methods - only visible on lg+ */}
          <div className="hidden lg:block">
            <h3 className="text-white text-lg font-semibold mb-6">Pay With</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png",
                "https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png",
                "https://ae01.alicdn.com/kf/S8331b2acbf4a439f960a474048fb401fv/216x144.png",
                "https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png",
                "https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png"
              ].map((src, i) => (
                <img key={i} src={src} alt="payment" className="h-9 w-auto" />
              ))}
            </div>
          </div>

          {/* Column 5 - Company */}
          <FooterColumn 
            title="Company"
            items={[
              "About Us",
              "Careers",
              "Management Team",
              "Board of Directors",
              "Investor Relations",
              "Blog",
              "Contact Us"
            ]}
          />
        </div>

        {/* Social Media + Divider */}
        <div className="border-t border-gray-700 pt-10 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-8 text-3xl text-gray-400">
              <Link href="/"><FaFacebook className="hover:text-white transition-colors" /></Link>
              <Link href="/"><FaTwitter className="hover:text-white transition-colors" /></Link>
              <Link href="/"><FaInstagram className="hover:text-white transition-colors" /></Link>
              <Link href="/"><FaWhatsapp className="hover:text-white transition-colors" /></Link>
              <Link href="/"><FaTelegramPlane className="hover:text-white transition-colors" /></Link>
              <Link href="/"><IoLogoTiktok className="hover:text-white transition-colors" /></Link>
            </div>

            {/* Brand name & copyright */}
            <div className="text-center md:text-right">
              <h2 className="text-2xl font-bold text-gray-200">AlasDget</h2>
              <p className="text-sm text-gray-500 mt-2">
                Copyright © 2025 AlasDget, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-gray-400">
          <span>Legal Stuff</span>
          <span>•</span>
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Security</span>
          <span>•</span>
          <span>Website Accessibility</span>
          <span>•</span>
          <span>Manage Cookies</span>
        </div>
      </div>
    </footer>
  );
};

// Reusable column component (can be made collapsible later)
function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-5">{title}</h3>
      <ul className="space-y-3 text-sm text-gray-400">
        {items.map((item, index) => (
          <li 
            key={index}
            className="cursor-pointer hover:text-white hover:underline transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;