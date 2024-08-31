import Articles from "../../components/article/Articles";
import BusinessContinuity from "../../components/businessContinuity/BusinessContinuity";
import CustomBorder from "../../components/common/border/CustomBorder";
import Analytics from "../../components/dashboard/Analytics";
import Dashboard from "../../components/dashboard/Dashboard";
import TrustedBrands from "../../components/dashboard/TrustedBrands";
import DataAnalytics from "../../components/dataAnalytics/DataAnalytics";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import IntegratedSocialMedia from "../../components/socialmedia/IntegratedSocialmedia";

const Home = () => {
  return (
    <>
      <div className=" w-full relative bg-[#1C2792] h-[856px] md:h-[650px]  ">
        <div className="absolute bg-[#0097FE] to-[] w-24 md:w-20 h-10 clip-path-polygon-mobile md:clip-path-polygon left-0  bottom-72 opacity-10 md:opacity-20"></div>
        <CustomBorder
          width="180px"
          height="60px"
          borderWidth="1px"
          borderColor="#0097FE"
          skewDegree={5}
          showTopBorder={true}
          showBottomBorder={true}
          showLeftBorder={false}
          showRightBorder={true}
          styles="z-10 absolute left-0 top-72 opacity-40 "
        />
        <div className="absolute bg-gradient-to-tr from-[#0097FE] to-[#1D3EA7]  w-40 md:w-40 h-16 clip-path-polygon-mobile md:clip-path-polygon left-0  -bottom-[116px] opacity-10 md:opacity-40 z-10"></div>

        <div className="hidden md:block absolute bg-gradient-to-tr from-[#0097FE] to-[#1D3EA7] w-20 md:w-26 h-10 clip-path-polygon-mobile md:clip-path-polygon right-0  top-40 opacity-10 md:opacity-40"></div>

        <div className="hidden md:block  absolute bg-gradient-to-tr from-[#0097FE] to-[#1D3EA7] w-24 md:w-[600px] h-24 clip-path-polygon-mobile md:clip-path-polygon-high right-[76px]  top-[215px] opacity-10 md:opacity-5 -rotate-2"></div>
        <Navbar />
        <Dashboard />

        <div className="relative z-20">
          <div className="absolute top-20 inset-0 left-0 right-0 flex justify-center items-center w-full">
            <Analytics />
          </div>
        </div>
      </div>
      <div className="separator-dashboardBottom"></div>
      <div className="h-20"></div>

      <div className="mt-[70px] md:mt-[220px] lg:mt-[500px]">
        <TrustedBrands />
      </div>
      <BusinessContinuity />
      <DataAnalytics />
      <IntegratedSocialMedia />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;

//bg-[url(src/assets/dashboard/BackgroundHeroSmall.png)] md:bg-[url(src/assets/dashboard/BackgroundHeroLarge.png)] bg-no-repeat parent-body
