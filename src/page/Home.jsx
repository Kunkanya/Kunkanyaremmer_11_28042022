import Header from "../component/Header.jsx";
import Banner from "../component/Banner.jsx"
import Footer from "../component/Footer.jsx";
import "../util/Header.css"
import Thumbnail from "../component/Thumbnail.jsx";

/**
 * Home
 */

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Thumbnail />
      <Footer />
    </div>
  );

  
}

export default Home;
