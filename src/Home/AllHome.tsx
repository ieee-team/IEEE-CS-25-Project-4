

import BestLabs from "./Bestlabs";
import BestPCs from "./BestPCs";
import BestSellerSection from "./BestSellerSection";
import BrandNewForYou from "./BrandNewForYou";
import DealsSection from "./DealsSection";
import FeaturedSection from "./FeaturedSection";
import HeroBanner from "./HeroBanner";
import Main from "./Main";
import ProductCategory from "./ProductCategory";
import TopPhones from "./TopPhones";
import TopTablets from "./TopTablets";

function AllHome() {
  return (
    <>
      
      <HeroBanner/>
      <FeaturedSection/>
      <DealsSection/>
      <Main/>
      <BestSellerSection/>
      <BrandNewForYou/>
      <TopPhones/>
      <TopTablets/>
      <BestLabs/>
      <BestPCs/>
      <ProductCategory/>
    </>
  )
}

export default AllHome
