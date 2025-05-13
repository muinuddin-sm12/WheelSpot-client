import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import DiscoverCars from "@/components/DiscoverCars";
import FeatureProducts from "@/components/FeatureProducts";
import News from "@/components/News";
import Review from "@/components/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureProducts />
      <Brands/>
      <DiscoverCars/>
      <News/>
      <Review/>
    </div>
  );
};

export default Home;
