import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
   <div className="main-containar">
      <Navbar/>
      <Header/>
      <Hero/>
      <Footer/>
   </div>
  );
}
