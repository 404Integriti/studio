import HeroSection from "../components/heroSection/webflowsupport"
import OngoingSupport from "./sections/OngoingSupport"
import WhatWeHandle from "./sections/WhatWeHandle"
import Monitoringsupport from "./sections/MonitoringSupport"
export default function WebflowSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OngoingSupport />
      <WhatWeHandle />
      <Monitoringsupport />

    </div>
  )
}
