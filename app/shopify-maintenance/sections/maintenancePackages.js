"use client";

import { useState } from "react";

const MaintenancePackages = () => {
  const [billingCycle, setBillingCycle] = useState("annually");

  const packages = {
    monthly: [
      {
        name: "SiteCare Basic",
        description: "Essential Maintenance & Support for Standard WordPress Sites",
        price: 89,
        color: "#009688",
        features: [
          "Website Activity Logs",
          "Basic Security Hardening",
          "Google Analytics Integration",
          "Cloud Backups (2x per week)",
          "Weekly WP Core & Plugin Updates",
          "2 Hours of Support per Month",
          "24/7 Uptime Monitoring & Support"
        ]
      },
      {
        name: "SiteCare Plus",
        description: "For Growing Sites That Need Edits, Security & Stability",
        price: 167,
        color: "#009688",
        features: [
          "All SiteCare Basic features",
          "Advanced Security Configuration",
          "Performance Health Check",
          "Cloud Backups (2x per week)",
          "Monthly Maintenance Reports",
          "4 Hours of Dev/Support per Month",
          "Unlimited Website Edits (fair usage)"
        ]
      },
      {
        name: "SiteCare Pro",
        description: "For Feature-Rich, High-Traffic or Ecommerce Sites",
        price: 237,
        color: "#009688",
        features: [
          "All SiteCare Plus features",
          "Full Malware Scans & Cleanup",
          "Speed, Mobile & Media Optimization",
          "Cloud Backups (Daily)",
          "Quarterly Technical SEO Review",
          "6 Hours of Dev/Support per Month",
          "WooCommerce Compatibility Support"
        ]
      },
      {
        name: "SiteCare Elite",
        description: "For Custom-Coded, High-Security, or Enterprise-Level Sites",
        price: 364,
        color: "#009688",
        features: [
          "All SiteCare Pro features",
          "Safe Updates via Staging",
          "Custom QA & Git Version Control",
          "Cloud Backups (4x Daily)",
          "24/7 Custom Code Monitoring",
          "10 Hours of Dev/Support per Month",
          "Enterprise Hosting Support"
        ]
      }
    ],
    annually: [
      {
        name: "SiteCare Basic",
        description: "Essential Maintenance & Support for Standard WordPress Sites",
        price: 76,
        color: "#ed8104",
        features: [
          "Website Activity Logs",
          "Basic Security Hardening",
          "Google Analytics Integration",
          "Cloud Backups (2x per week)",
          "Weekly WP Core & Plugin Updates",
          "2 Hours of Support per Month",
          "24/7 Uptime Monitoring & Support"
        ]
      },
      {
        name: "SiteCare Plus",
        description: "For Growing Sites That Need Edits, Security & Stability",
        price: 143,
        color: "#ed8104",
        features: [
          "All SiteCare Basic features",
          "Advanced Security Configuration",
          "Performance Health Check",
          "Cloud Backups (2x per week)",
          "Monthly Maintenance Reports",
          "4 Hours of Dev/Support per Month",
          "Unlimited Website Edits (fair usage)"
        ]
      },
      {
        name: "SiteCare Pro",
        description: "For Feature-Rich, High-Traffic or Ecommerce Sites",
        price: 203,
        color: "#ed8104",
        features: [
          "All SiteCare Plus features",
          "Full Malware Scans & Cleanup",
          "Speed, Mobile & Media Optimization",
          "Cloud Backups (Daily)",
          "Quarterly Technical SEO Review",
          "6 Hours of Dev/Support per Month",
          "WooCommerce Compatibility Support"
        ]
      },
      {
        name: "SiteCare Elite",
        description: "For Custom-Coded, High-Security, or Enterprise-Level Sites",
        price: 312,
        color: "#ed8104",
        features: [
          "All SiteCare Pro features",
          "Safe Updates via Staging",
          "Custom QA & Git Version Control",
          "Cloud Backups (4x Daily)",
          "24/7 Custom Code Monitoring",
          "10 Hours of Dev/Support per Month",
          "Enterprise Hosting Support"
        ]
      }
    ]
  };

  const currentPackages = packages[billingCycle];

  return (
    <section className="bg-white lg:p-[60px] md:p-[30px] p-[20px] pb-[0px]">
      <div className="w-full max-w-[1400px] mx-auto lg:px-[24px] px-[0px]">
        {/* Main Heading */}
        <h2 
          className="text-center mb-16 lg:text-[40px] md:text-[36px] text-[28px] lg:leading-[42px] leading-[40px] font-[600] mb-[20px] mt-[10px]"
          style={{
            fontFamily: "var(--font-raleway)"
          }}
        >
          WordPress Maintenance Packages
        </h2>

        {/* Pricing Toggle */}
        <div className="flex flex-col items-center md:mb-12 mb-6 md:mt-[40px] mt-[30px]">
          <div className="flex items-center space-x-8 mb-3">
            <span className="text-[14px] font-[400] transition-colors duration-500 ease-in-out text-[#170f49]">
              Monthly
            </span>
                  {/* Toggle Switch */}
          <div 
            className="relative bg-[#ed8105] rounded-full p-1  h-[33px] w-[74px] min-w-[74px] min-h-[33px] cursor-pointer transition-all duration-500 ease-in-out hover:bg-gray-200"
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
          >
            {/* Orange sliding background */}
            <div 
              className={`absolute top-1 bottom-1 rounded-full bg-[#fff] w-[25px] h-[25px] w-[25px] min-w-[25px] min-h-[25px]  transition-all duration-500 ease-in-out ${
                billingCycle === "monthly" 
                  ? "left-1 w-14" 
                  : "right-1 w-14"
              }`}
            />
          </div>
            <span className="text-[14px] font-[400] transition-colors duration-500 ease-in-out text-[#170f49]">
              Annually
            </span>
        </div>

          
          </div>
          
    
        {/* Pricing Cards */}
        <div className="flex gap-[20px] xl:flex-nowrap flex-wrap justify-center ">
          {currentPackages.map((pkg, index) => (
            <div 
              key={`${billingCycle}-${index}`}
              className="w-[100%] xl:max-w-[25%] lg:max-w-[49%] md:max-w-[47%] max-w-[98%] px-[17px] py-[40px] bg-[#fff] rounded-[12px] transition-all duration-500 ease-in-out shadow-[0_0_20px_8px_#0003]"
              style={{
                animation: 'fadeInUp 0.5s ease-out'
              }}
            >
              {/* Plan Name */}
              <h3 
                className="text-[24px] leading-[30px] mb-[5px] text-center text-[#009688] font-[700]"
                style={{
                  fontFamily: "var(--font-raleway)",
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                {pkg.name}
              </h3>

              {/* Description */}
              <p 
                className="text-[15px] font-[400] text-center leading-[21px] text-[#000]"
                style={{
                  fontFamily: "var(--font-raleway)",
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                {pkg.description}
              </p>

              {/* Price */}
              <div  className={`flex justify-center py-[25px] mb-[15px] ${
                    billingCycle === "annually" ? "flex-col justify-center items-center gap-[10px]" : ""
                  }`}
                >
                <span 
                  className="text-[50px] leading-[33px] font-[700] text-[#009688] "
                  style={{
                    fontFamily: "var(--font-raleway)",
                    transition: 'all 0.5s ease-in-out',
                    color: pkg.color,
                  }}
                >
                  ${pkg.price}
                </span>
                <p 
                  className="text-[14px] text-gray-500 mt-1"
                  style={{
                    fontFamily: "var(--font-raleway)",
                    transition: 'all 0.5s ease-in-out'
                    
                  }}
                >
                {billingCycle === "monthly" ? "/monthly" : "billed annually/month"}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start mb-[20px]">
                    <span className="text-green-500 mr-[5px] mt-1">
                      <svg className="w-4 h-4" fill={pkg.color} viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span 
                      className="text-[15px] text-[#000] leading-[20px]"
                      style={{
                       fontFamily: "var(--font-raleway)",
                        transition: 'all 0.5s ease-in-out'
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full mt-[10px] bg-[#009688] px-[20px] rounded-[20px] py-[15px] text-[21px] text-[#fff] font-[500] leading-[29px] transition-all duration-500 ease-in-out shadow-[0_0_12px_5px_#0003]">
                Subscribe Here
              </button>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .grid > div {
            transition: all 0.5s ease-in-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default MaintenancePackages;
