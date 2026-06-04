import Banner from "@/components/Banner";
import CommunityImpact from "@/components/CommunityImpact";
import InnovationCategories from "@/components/InnovationCategories";
import TrendingIdeas from "@/components/TrendingIdeas";
import WhyChooseIdeaVault from "@/components/WhyChooseIdeaVault";

export default function Home() {
  return (
    <div>
      <Banner />
      <TrendingIdeas />
      <InnovationCategories />
      <WhyChooseIdeaVault />
      <CommunityImpact />
    </div>
  );
}
