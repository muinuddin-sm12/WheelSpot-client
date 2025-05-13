import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import DiscoverCars from "@/components/DiscoverCars";
import FeatureProducts from "@/components/FeatureProducts";
import Review from "@/components/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureProducts />
      <Brands/>
      <DiscoverCars/>
      <Review/>
    </div>
  );
};

export default Home;
