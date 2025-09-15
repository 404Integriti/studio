'use client';
import Wordpressmaintenance from "@/app/components/heroSection/wordpressmaintenance";
import StoreHealthMonitoring from "./sections/storeHealthmonitoring";
import RegularUpdates from "./sections/regularUpdates";
import Securitybackup from "./sections/securitybackup"
import MaintenancePackages from "./sections/maintenancePackages";

export default function page() {
  return (
    <>
  <Wordpressmaintenance />
  <StoreHealthMonitoring />
  <RegularUpdates />
  <Securitybackup />
  <MaintenancePackages />
  </>
  )
}
