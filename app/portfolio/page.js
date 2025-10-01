import Portfoliohero from "../components/heroSection/porfoliohero";
import Porfoliolist from "./porfoliolist";

export const metadata = {
  title: "Portfolio ",
};
export default function Portfolio() {
  return (
    <>
      <Portfoliohero />
      <Porfoliolist />
    </>
  );
}
