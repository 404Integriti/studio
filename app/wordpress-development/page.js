'use client';
import WhyUs from './sections/WhyUs';
import WordpressDevelopment from '../components/heroSection/wordpressdevelopment';
import Developmentservices from './sections/developmentservices';
import CustomThemeDevelopment from './sections/CustomThemeDevelopment';
import PluginIntegration from './sections/PluginIntegration';
import StoreFeatures from './sections/mobilefirstapproch';

export default function page() {
  return (
    <div>
      <WordpressDevelopment />
      <WhyUs />
      <Developmentservices />
      <CustomThemeDevelopment />
      <PluginIntegration />
      <StoreFeatures />
    </div>
  )
}
