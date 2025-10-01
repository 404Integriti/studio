import ResourcesHero from "../components/heroSection/resourceshero";
import ResourcesList from "./sections/resourceslist";

export const metadata = {
  title: "Resources",
};
export default function Resources() {
  return (
    <>
      <ResourcesHero />
      <ResourcesList />
    </>
  );
}
