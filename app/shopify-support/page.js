import Shopifysupporthero from "@/app/components/heroSection/shopifysupport"
import Shopifyongoingsuport from "./sections/ongoingsuport"
import  Monitoringshopify from "./sections//monitoring"
import ShopifymergencyResponse from "./sections/EmergencyResponse"
import VerticalCarousel from "./sections/verticalCarousel"

export default function shopifysupport() {
  return (
   <>
   <Shopifysupporthero />
   <Shopifyongoingsuport />
   < Monitoringshopify />
   <ShopifymergencyResponse />
   <VerticalCarousel />
   </>
  )
}
