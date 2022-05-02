import Header from "../component/Header.jsx";
import Banner from "../component/Banner.jsx"
import Footer from "../component/Footer.jsx";
import "../util/Header.css"
import Thumbnail from "../component/Thumbnail.jsx";
//import Logements from "../asset/logements.json";
/**
 * Home page
 * @returns 
 */
function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <div className="Home-thumbnail">
          <Thumbnail />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
