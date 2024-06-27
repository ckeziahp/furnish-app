import Navbar from "../../components/navbar";
import About from "./components/about";
import Collection from "./components/collection";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Services from "./components/services";
import Statics from "./components/Statics";
import Testimonial from "./components/testimonial";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Collection />
      <Statics />
      <Testimonial />
      <Footer />
    </div>
  )
};

export default LandingPage