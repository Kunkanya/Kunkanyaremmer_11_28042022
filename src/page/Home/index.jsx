import Banner from "../../component/Banner/index.jsx"
import Thumbnail from "../../component/Thumbnail/index";
import './Home.css'
/**
 * Home
 */

function Home() {
  const sloganText = "Chez vous, partout et ailleurs"
  return (
    <div className = "Home">
      <div className="home-banner">
      <Banner path = "/asset/background_image.png" slogan={sloganText} className="home-banner" />
      </div>
      <Thumbnail />
    </div>
  );

  
}

export default Home;
