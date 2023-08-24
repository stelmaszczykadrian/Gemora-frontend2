import CarouselComponent from "./CarouselComponent";
import FeaturedCategories from "./FeaturedCategories";
import Banner from "./Banner";
import img1 from '../../assets/images/img4.jpg'
import img2 from '../../assets/images/img88.jpg'
import LogosGallery from "./LogosGallery";
import FeatureBoxes from "./FeatureBoxes";
import RecommendedSlider from "../recommended/RecommendedSlider";

const mainBannerTitle = "Embrace Harmony with Gemora";
const mainBannerDescription = "Our Gemora products are crafted in standardized sizes, granting you the freedom to mix and match as you please, crafting a style that's distinctly your own.";
const secondaryBannerTitle = "Perfect Gifts for Every Occasion";
const secondaryBannerDescription =  "Gemora offers a range of products perfect for gifting. Each item combines elegance with comfort, making them ideal for special occasions or thoughtful presents. Discover Gemora, where every product is crafted to bring joy and sophistication to everyday life."


const isMainBanner = false;
const isReversedBanner = true;



const Home = () => {


    return <>
        {/*<CarouselComponent/>*/}
        <FeaturedCategories/>
        {/*<FeatureBoxes/>*/}
        <Banner reverse={isMainBanner} img={img1} text={mainBannerDescription} title={mainBannerTitle}/>
        <RecommendedSlider/>
        <Banner reverse={isReversedBanner} img={img2} text={secondaryBannerDescription} title={secondaryBannerTitle}/>
        <LogosGallery/>
    </>;
};

export default Home;