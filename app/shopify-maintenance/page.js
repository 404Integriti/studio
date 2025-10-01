import RegularUpdates from "./sections/regularUpdates";
import Securitbackup from "./sections/securitybackup";
import Health from "./sections/storeHealthmonitoring";
import Shopifymaintenance from "@/app/components/heroSection/shopifymaintaincehero";

export const metadata = {
  title: "Shopify Maintenance",
};

export default function Shopifymaintainace() {
  return (
    <>
      <Shopifymaintenance />
      <Health />
      <RegularUpdates />
      <Securitbackup />
    </>
  );
}
