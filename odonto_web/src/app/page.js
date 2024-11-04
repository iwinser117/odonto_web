import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Specialists from "./components/Specialists";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow">
        <Banner />
        <Services />
        <WhyChooseUs />
        <Specialists />
        <Testimonials />
      </main>
      <Footer/>
    </div>
  );
}
