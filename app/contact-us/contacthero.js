"use client";
import { Mail, Phone } from "lucide-react";
import SectionHeading from "../components/secheading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
export default function ContactSection() {

 // 🧠 Step 1: Manage state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 🧠 Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🧠 Step 3: Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    console.log(formData);

    try {
      const res = await axios.post("/api/contact", formData); 
      if (res.status === 200) {
        setSuccessMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
      
    } catch (error) {
      console.error(error);
      setErrorMsg("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  

  


  return (
    <section
      className=" contact hero-section-bg w-full px-[15px] lg:pt-[120px] md:pt-[80px] pt-[60px] pb-[60px]"
      style={{
        backgroundImage: "url(/hero-section-bg.webp)",
      }}
    >
      <div className="w-[100%] max-w-[1440px] mx-auto">
        <SectionHeading
          heading={
            <>
              <span className="hero-orange">Contact</span> Us
            </>
          }
          classheading="text-center pb-[20px] lg:text-[50px] text-[36px] font-[800] lg:leading-[68px] leading-[50px] mt-[20px] mb-[10px]"
        />
      </div>
      <div className="max-w-[1440px]  mx-auto flex md:flex-row flex-col gap-10 px-6">
        {/* Left Info Boxes */}
        <div className="flex xl:flex-row flex-col justify-center items-center gap-[16px] w-[100%] md:max-w-[48%] max-w-[100%] ">
          {/* Contact Info */}
          <div className="bg-[#ffd99d33] rounded-[8px] min-h-[110px] py-[15px] px-[15px] w-[100%] xl:max-w-[178px] max-w-[100%] xl:h-[149px] md:h-[125px]">
            <h3
              className="text-[18px] font-[700] leading-[24px] mb-[10px] "
              style={{
                fontFamily: "var(--font-raleway)",
              }}
            >
              Contact Info
            </h3>
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-black" />
              <Link
                href="/tel:+16122177172"
                className="text-[#333] font-arial text-[14px] leading-[24px] font-[500]"
              >
                +1 (612) 217-7172
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-black" />
              <Link
                href="mailto:info@integriti.io"
                className="text-[#333] font-arial text-[14px] leading-[24px] font-[500]"
              >
                info@integriti.io
              </Link>
            </div>
          </div>

          {/* Toronto */}
          <div className="bg-[#c5e3e0] rounded-[8px] min-h-[110px] py-[15px] px-[15px] w-[100%] xl:max-w-[189px] max-w-[100%] xl:h-[149px] md:h-[125px]">
            <div className="flex items-center justify-start mb-[10px] gap-[27px]">
              <h3
                className="text-[18px] font-[700] leading-[24px]  "
                style={{
                  fontFamily: "var(--font-raleway)",
                }}
              >
                Toronto
              </h3>
              <Image
                src="https://flagcdn.com/ca.svg"
                alt="Canada Flag"
                width={35}
                height={24}
              />
            </div>
            <p
              className="text-[#575757] text-[14px] font-[400] mb-[10px]"
              style={{
                fontFamily: "var(--font-raleway)",
              }}
            >
              2 Robert Speck Parkway Suite 750 Mississauga, Ontario L4Z 1H8,
              Canada
            </p>
          </div>

          {/* Minneapolis */}
          <div className="bg-[#6c4ab633] rounded-[8px] min-h-[110px] py-[15px] px-[15px] w-[100%] xl:max-w-[200px] max-w-[100%] xl:h-[149px] md:h-[125px]">
            <div className="flex items-center justify-start mb-[10px] gap-[27px]">
              <h3
                className="text-[18px] font-[700] leading-[24px]  "
                style={{
                  fontFamily: "var(--font-raleway)",
                }}
              >
                Minneapolis
              </h3>
              <Image
                src="https://flagcdn.com/us.svg"
                alt="USA Flag"
                width={39}
                height={20}
              />
            </div>
            <p
              className="text-[#575757] text-[14px] font-[400] mb-[10px]"
              style={{
                fontFamily: "var(--font-raleway)",
              }}
            >
              7760 France Ave South Suite 1100 Bloomington, MN 55435
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-[100%] md:max-w-[48%] max-w-[100%] bg-white py-[20px] ">
            <form
            className="flex flex-col w-[100%] max-w-[580px] mx-auto"
            style={{ fontFamily: "var(--font-raleway)" }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-[#1c1c1c] mb-[5px] font-[600] ">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-[#fff] border border-[#171f33] rounded-[20px] w-[100%] h-[48px] px-[16px] text-[#575757] mb-[10px] py-[8px] text-[14px]"
              />
            </div>

            <div>
              <label className="text-[#1c1c1c] mb-[5px] font-[600]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-[#fff] border border-[#171f33] rounded-[20px] w-[100%] h-[48px] px-[16px] text-[#575757] mb-[10px] py-[8px] text-[14px]"
              />
            </div>

            <div>
              <label className="text-[#1c1c1c] mb-[5px] font-[600]">
                Phone Number
              </label>
              <div className="bg-[#fff] border border-[#171f33] rounded-[20px] w-[100%] h-[48px] px-[16px] text-[#575757] mb-[10px] py-[8px] text-[14px] flex">
                <Image
                  src="https://flagcdn.com/us.svg"
                  alt="US Flag"
                  width={20}
                  height={14}
                  className="mr-2"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="+1"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 border-0 py-3 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[#1c1c1c] mb-[5px] font-[600]">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#fff] border border-[#171f33] rounded-[20px] w-[100%] h-auto min-h-[112px] px-[16px] text-[#575757] mb-[10px] py-[8px] text-[14px]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#ff5722] w-[124px] md:h-[51px] h-[40px] inline text-white rounded-[24px] capitalize tracking-[1px] text-[16px] font-[600] leading-[27px] hover:bg-orange-600 transition"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {successMsg && (
              <p className="text-green-600 mt-3 text-sm">{successMsg}</p>
            )}
            {errorMsg && (
              <p className="text-red-600 mt-3 text-sm">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
