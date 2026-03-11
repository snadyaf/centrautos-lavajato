import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Scheduling from "@/components/Scheduling";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Scheduling />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
