'use client';
import Shopifydevhero from "../components/heroSection/shopifydevhero"
import Mianshopifyservices from "./sections/shopifyservices"
import Textmarquee from "./sections/textmarquee"
import ScrollFeatures from "./sections/scrollFeatures"
import ShopifyPlusSection from "./sections/shopifyplussection"
import Whyshopify from './sections/whyshopify'
import Performance from "./sections/performance"

export default function page() {
  return (
    <>
    <Shopifydevhero />
    <Whyshopify />
    <Mianshopifyservices />
    <Textmarquee />
    <ShopifyPlusSection />
    <ScrollFeatures />
    <Performance />
    </>
  )
}

