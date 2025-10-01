  "use client";
  import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { validateEmailAndSubmit } from "@/utils/Mail";

export default function Footer() {
  
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const isValid =await validateEmailAndSubmit(email);

      if (isValid) {
        // ✅ Do whatever you want here (e.g., submit to backend, Mailchimp, etc.)
        setSuccess("Email validated and submitted successfully ");
        // Example: Call your own API endpoint here
        // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) })
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="footer bg-[#3c3c3c]">
      <div className="w-full max-w-[1440px] px-[24px] mx-auto">
        {/* Main Footer Grid */}
        <div
          className="pt-[60px] pb-[60px] md:pt-[80px] md:pb-[80px] xl:pt-[100px] xl:pb-[100px] 
                     grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[0px] md:gap-[40px] xl:gap-[80px]"
        >
          {/* Left section - Logo and About */}
          <div className="w-full max-w-[460px] flex flex-col md:col-span-2 lg:col-span-1 lg:mb-[0px] mb-[40px]">
            <Link href="/">
            <Image
              src="/footerlogo.svg"
              alt="Footer Logo"
              width={234}
              height={25}
            /></Link>
            <p className="text-white lg:mt-[30px] mt-[15px]  lg:mb-[40px] mb-[20px] text-[14px] leading-[26px] w-full max-w-[410px] tracking-[1px] font-[400]raleway">
              Integriti Studio is your trusted partner for high-performance web
              solutions—specializing in Shopify, WordPress, Webflow and custom
              apps. We blend strategy, design and development to build digital
              experiences that grow with your business.
            </p>
            <div className="flex gap-4 mt-[10px]">
              <Link
                href="https://www.linkedin.com/company/integritistudio/"
                className="h-[36px] w-[36px] bg-[#009688] hover:bg-[#ed8104] rounded-full flex items-center justify-center"
              >
                <Image
                  src="/linkdin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://www.instagram.com/integriti.studio?igsh=MWtjY2ZuN2dyM3Bndg=="
                className="h-[36px] w-[36px] bg-[#009688] hover:bg-[#ed8104] rounded-full flex items-center justify-center"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://github.com/Integritistudio"
                className="h-[36px] w-[36px] bg-[#009688] hover:bg-[#ed8104] rounded-full flex items-center justify-center"
              >
                <Image src="/github.svg" alt="GitHub" width={16} height={16} />
              </Link>
            </div>
          </div>

          {/* Middle section - Links */}
          <div className="footer-links w-full md:col-span-1 lg:col-span-1">
            <ul className="flex flex-col md:gap-3 gap-1 pt-[20px] md:pt-[50px]">
              <li className="lg:text-center text-left">
                <Link
                  href="/aboutus"
                  className="text-white hover:text-[#ed8104] w-[80px] text-left"
                >
                  About Us
                </Link>
              </li>
              <li className="lg:text-center text-left">
                <Link
                  href="/portfolio"
                  className="text-white hover:text-[#ed8104] w-[80px] text-left"
                >
                  Portfolio
                </Link>
              </li>
              <li className="lg:text-center text-left">
                <Link
                  href="/contact-us"
                  className="text-white hover:text-[#ed8104] w-[80px] text-left"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links w-full md:col-span-1 lg:col-span-1 mb-[40px]">
            <ul className="flex flex-col md:gap-3 gap-1 pt-[20px] md:pt-[50px]">
              <li>
                <Link
                  href="/shopify-development"
                  className="text-white hover:text-[#ed8104]"
                >
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link
                  href="/wordpress-development"
                  className="text-white hover:text-[#ed8104]"
                >
                  Wordpress Development
                </Link>
              </li>
              <li>
                <Link
                  href="/webflow-development"
                  className="text-white hover:text-[#ed8104]"
                >
                  Webflow Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Right section - Newsletter */}
          <div className="newsletter w-full max-w-[322px] md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-[18px] leading-[22px] font-[600] mb-[26px] raleway">
              Subscribe to Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="flex ">
              <input
                
                type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-[16px] py-[12px] bg-[#f5f5f5] text-[#333333] rounded-l-[8px] border-none outline-none flex-1 min-w-[200px]"
                required
              />
              <button className="px-[20px] h-[55px] py-[12px] bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white rounded-r-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity" type="submit" disabled={loading}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            
            </form>  
            {error && <p className="text-red-300 mt-[10px]">{error}</p>}
             {success && <p className="text-green-600 mt-[10px]">{success}</p>}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center bg-[#3d3d3d] pt-[20px] pb-[20px] md:px-[20px] px-[25px] border-t border-white/20">
        <p className="text-white raleway text-[14px] sm:text-[16px] md:text-[18px]">
          © 2025, Integriti Services, All rights reserved | Powered By{" "}
          <Link
            href="https://www.integriti.io/"
            className="text-[#ede9e9] hover:text-[#ed8104]"
          >
            Integriti
          </Link>
        </p>
      </div>
    </section>
  );
}
