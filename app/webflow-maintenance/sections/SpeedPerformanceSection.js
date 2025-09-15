import WebflowSpeedComponent from "@/app/components/WebflowSpeedComponent";

const accordionData = [
  {
    id: 1,
    title: "Asset Compression & Code Cleanup",
    description: "We optimize images and remove unused code for faster page loads.",
  },
  {
    id: 2,
    title: "Loading Sequence Tuning",
    description: "We reorder how assets load to maximize perceived speed and interactivity.",
  },
  {
    id: 3,
    title: "Webflow Metrics Audits",
    description: "We use performance reports to monitor speed and make data-backed improvements.",
  }
  ,
  {
    id: 4,
    title: "Core Web Vitals Alignment",
    description: "We fine-tune your site based on Google’s latest standards for real-world speed.",
  }
];

export default function SpeedPerformanceSection() {
  return (
    <main>
      <WebflowSpeedComponent
        title="Speed & Performance Optimization"
        accordionItems={accordionData}
        imageSrc="/update.png"
      />
    </main>
  );
}
