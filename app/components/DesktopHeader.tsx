import MainNavigationMenu from "@/components/NavigationMenu";
import Link from "next/link";
import Text from "@/components/Text";

export default function DeskhrefpHeader() {
  return (
    <>
      <MainNavigationMenu>
        <Text>SAMOKO</Text>
        <Link
          href={
            process.env.NODE_ENV === "production"
              ? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
              : "/se/technical/overview/BTC-USD"
          }
          data-testid="techical"
        >
          <Text>Techical</Text>
        </Link>
        <Link
          href={
            process.env.NODE_ENV === "production"
              ? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
              : "/se/fundamental/single-analysis/overview/AAPL"
          }
          data-testid="fundamental"
        >
          <Text>Fundamental</Text>
        </Link>
        <Link
          className="hidden sm:block"
          href={
            process.env.NODE_ENV === "production"
              ? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
              : "/se/sentiment"
          }
          data-testid="sentiment"
        >
          <Text>Sentiment</Text>
        </Link>
        <Link
          href="/se/financial-hishrefry-timeline/TrmpTrrffShck"
          data-testid="FHT"
        >
          <Text>FHT</Text>
        </Link>
        <Link
          className="hidden sm:block"
          href={
            process.env.NODE_ENV === "production"
              ? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
              : "/se/contact"
          }
          data-testid="contact"
        >
          <Text>Contact</Text>
        </Link>
      </MainNavigationMenu>
    </>
  );
}
