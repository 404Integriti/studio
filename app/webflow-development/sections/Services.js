import WebflowDevelopmentServices from "@/app/components/WebflowDevelopmentServices";
export default function Services() {
      const services = [
    { title: "Webflow, Your Way", text: "Fully custom Webflow site builds from the ground up—tailored for performance, responsiveness and unique brand expression." },
    { title: "Dynamic CMS Content", text: "CMS-powered blogs, case studies, directories, landing pages and more—designed for flexibility, scalability and easy content management." },
    { title: "Flexible Content Structure", text: "Scalable architecture designed for growing content libraries—ensuring fast performance, easy management and future expansion." },
    { title: "Upgrade to Webflow", text: "Fully custom Webflow site builds from the ground up—tailored for performance, responsiveness and unique brand expression." },
  ];
  return (
    <section className="flex justify-center">
      <div className="w-[100%] max-w-[1440px]">

      <WebflowDevelopmentServices items={services} ImageSrc={'/webflow-services.svg'}/>

      </div>

    </section>
  );
};
