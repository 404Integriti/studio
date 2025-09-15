import WebflowMaintenance from "../components/heroSection/webflowmaintenance"
import ProactiveMaintenanceSection from "./sections/ProactiveMaintenanceSection"
import SecurityReliabilitySection from "./sections/SecurityReliabilitySection"
import SpeedPerformanceSection from "./sections/SpeedPerformanceSection"
export default function WebflowMaintenancePage() {
  return (
    <div className="min-h-screen ">
      <WebflowMaintenance />
      <ProactiveMaintenanceSection />
      <SpeedPerformanceSection/>
      <SecurityReliabilitySection />
    </div>
  )
}
