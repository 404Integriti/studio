import Valuescom from "@/app/components/about/valuescom";

export default function Values() {
  // This is your data
  const valuesData = [
    {
      icon: "/hand.png",
      heading: "Client-First Mindset",
      subheading:
        "We prioritize your business goals and vision, crafting solutions that are tailored, purposeful and designed for real impact.",
      bgcolor: "#e2dbf0",
      padleft: "20px",
    },
    {
      icon: "/tool.png",
      heading: "Built for Longevity",
      subheading:
        "We focus on quality over quantity—delivering meaningful results without shortcuts, with every detail built to perform and last.",
        bgcolor: "#cceae7",
        padleft: "98px",
    },
    {
      icon: "/scan.png",
      heading: "Transparent Collaboration",
      subheading:
        "From kickoff to launch, we maintain open communication, mutual trust and total accountability. Great work starts with a great relationship.",
   
       bgcolor: "#fadbd1",
       padleft: "20px",
     }
  ];

  return (
    <section className="values">
      <Valuescom
        mainHeading="Our "
        highlight="Values"
        intro={
            <>
              Our values are the foundation of every project we take on. We believe in putting our clients first, delivering high-quality work that stands the test of time, and always staying a step ahead through innovation and learning. <br/> <br/> More than just a service provider, we’re a strategic partner committed to your long-term success.
            </>
        }
        values={valuesData}
      />
    </section>
  );
}
