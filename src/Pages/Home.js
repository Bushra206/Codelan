import React from "react";
import Banner from "../Components/Ui/HomeSection/Banner";
import CompanyLogo from "../Components/Ui/HomeSection/CompanyLogo";
import Hassle from "../Components/Ui/HomeSection/Hassle";
import Moment from "../Components/Ui/HomeSection/Moment";
import Themes from "../Components/Ui/HomeSection/Themes";
import Automation from "../Components/Ui/HomeSection/Automation";
import ExclusiveFeature from "../Components/Ui/HomeSection/ExclusiveFeature";
import Email from "../Components/Ui/HomeSection/Email";
import Blog from "../Components/Ui/HomeSection/Blog";
import Pricing from "../Components/Ui/HomeSection/Pricing/Pricing";
import FAQ from "../Components/Ui/HomeSection/FAQ";
import FeatureNotifyPart from "../Components/Ui/HomeSection/FeatureNotifyPart";

const Home = () => {
  return (
    <div>
      <Banner />
      <CompanyLogo />
      <Hassle />
      <Themes />
      <Moment />
      <Automation />
      <ExclusiveFeature />
      <Email />
      <Blog />
      <Pricing />
      <FAQ />
      <FeatureNotifyPart />
    </div>
  );
};

export default Home;
