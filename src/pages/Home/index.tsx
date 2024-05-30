//Layouts
import BenefitsBar from "../../layout/BenefitsBar";
import Blog from "../../layout/Blog";
import Footer from "../../layout/Footer";
import Hero from "../../layout/Hero";
import Navbar from "../../layout/Navbar";
import Portfolio from "../../layout/Portfolio";
import Prices from "../../layout/Prices";
import Services from "../../layout/Services";
import Steps from "../../layout/Steps";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="max-sm:mb-8">
        <Navbar />
      </div>
      <Hero />
      <div className="-mt-2 z-10">
        <BenefitsBar />
      </div>
      <div className="relative">
        <div className="bg-[url('/src/assets/elipse_dark_purple.png')] absolute top-0 -right-[300px] w-[660px] h-[660px] bg-contain bg-no-repeat"></div>
        <div className="bg-[url('/src/assets/elipse_light_purple.png')] absolute top-[150px] -left-[700px] w-[1200px] h-[1400px] bg-contain bg-no-repeat"></div>
        <div className="bg-[url('/src/assets/elipse_blue.png')] absolute bottom-0 -right-[100px] w-[600px] h-[600px] bg-contain bg-no-repeat"></div>
        <div className="flex flex-col gap-16">
          <Services />
          <Portfolio />
        </div>
      </div>
      <div className="mt-16">
        <Steps />
      </div>
      <div className="mt-16 flex flex-col gap-32 bg-[url('/src/assets/blog_blur.png')] bg-no-repeat bg-[center_bottom] mb-16">
        <Prices />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
