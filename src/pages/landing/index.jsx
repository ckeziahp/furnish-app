import Statitics from "./components/Statitics";
import About from "./components/about";
import Collection from "./components/collection";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonial from "./components/testimonial";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Collection />
      <Statitics/>
      <Testimonial />
     
    </div>
  )
};

export default LandingPage