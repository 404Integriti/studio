"use client"; // make sure it's client-side

import { useEffect, useState } from "react";
import WebflowMainSecurityComponent from "@/app/components/WebflowMainSecurityComponent";

export default function SecurityReliabilitySection() {
  const [title, setTitle] = useState("Security & Reliability Coverage");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 991) {
        setTitle("Security & Reliability Coverage");
      } else {
        setTitle(" Security &<br />Reliability Coverage");
      }
    }

    // Run once on mount
    handleResize();
    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Securitinfo = [
    {
      heading: "Regular Backups & Recovery",
      paragraph: "We create secure backups and ensure easy restoration in case of emergency.",
      bgcolor: "#ffd99d33",
      margin: "0 0 0 auto",
      align:"self-end"
    },
    {
      heading: "Firewall & Threat Monitoring",
      paragraph: "We set up protection against common threats, bots, and suspicious activity.",
      bgcolor: "#c5e3e0",
      margin: "0 auto 0 0",
            align:"self-center"

    },
    {
      heading: "SSL & HTTPS Enforcement",
      paragraph: "We make sure all pages are secure, giving users confidence and search engines a boost.",
      bgcolor: "#6c4ab633",
      margin: "0 0 0 auto",
            align:"self-end"

    },
    {
      heading: "Error & Downtime Monitoring",
      paragraph: "We track and resolve issues as they happen to maintain a consistent experience.",
      bgcolor: "#D2E6F6",
      margin: "0 auto 0 0",
      align:"self-center"

    },
  ];

  return (
    <WebflowMainSecurityComponent
      title={title}
      items={Securitinfo}
      imageSrc="/securitybg.png"
    />
  );
}
