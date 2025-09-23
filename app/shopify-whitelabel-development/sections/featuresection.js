// components/WhiteLabelFeatures.jsx
import FeatureItem from "./featureitem";

export default function FeatureSection() {
  const features = [
    {
      icon: "/seamless.svg",
      iconSize:"51",
      title: "Seamless Client Experience",
      description:
        "We work under your brand, providing deliverables that feel like an in-house extension of your agency.",
    },
    {
      icon: "/wordpressWhitelabel/why/one.svg",
      iconSize:"54",
      title: "Dedicated Shopify Experts",
      description:
        "A team of seasoned developers and designers highly specialized in Shopify and Shopify Plus. Ready when you are.",
    },
    {
      icon: "/wordpressWhitelabel/why/two.svg",
      iconSize:"60",
      title: "Flexible Engagement Models",
      description:
        "Whether you need one project or an ongoing partnership. We build flexible plans around your workflow.",
    },
    {
      icon: "/wordpressWhitelabel/why/three.svg",
      iconSize:"48",
      title: "Real Time Collaboration",
      description:
        "Communicate with us directly through Slack or your project management tool. No delays or guesswork.",
    },
    {
      icon: "/proven.svg",
      iconSize:"60",
      title: "Proven Track Record",
      description:
        "We’ve helped agencies deliver hundreds of successful Shopify stores across industries, from fashion to SaaS.",
    },
  ];

  return (
    <section>
      <div className="max-w-[1440px] mx-auto pt-[20px]">
        {/* Section Title */}
        <h2 className="text-[30px] sm:text-[28px] text-[#333] font-[700] text-center mb-[10px]" style={{fontFamily:"var(--font-raleway)",}}>
          Key Features of a White Label Partnership
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-[991px]:!grid-cols-5 max-w-[1340px] mx-auto px-[20px] py-[40px]">
          {features.map((feature, index) => (
            <div
            key={index}
            className={`px-[10px] 
            ${index !== features.length - 1 ? "min-[991px]:border-r-2 border-[#E5E7EB]" : ""}
            ${index === features.length - 1 ? "min-[991px]:col-span-1 min-[767px]:max-[991px]:col-span-5  min-[767px]:max-[991px]:mx-auto min-[767px]:max-[991px]:max-w-[227px]" : ""}
            
            
            `}>
                <FeatureItem
              icon={feature.icon}
              iconSize={feature.iconSize}
              title={feature.title}
              description={feature.description}
              titleStyle={index>2 && "max-w-[70%]"}

            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
