import Shopifysupporthero from "@/app/components/heroSection/shopifysupport";
import Shopifyongoingsuport from "./sections/ongoingsuport";
import Monitoringshopify from "./sections//monitoring";
import ShopifymergencyResponse from "./sections/EmergencyResponse";

export const metadata = {
  title: "Shopify Support",
};

export default function shopifysupport() {
  return (
    <>
      <Shopifysupporthero />
      <Shopifyongoingsuport />
      <Monitoringshopify />
      <ShopifymergencyResponse />
    </>
  );
}
