import Banner from "../../component/Banner/index.jsx"
import Thumbnail from "../../component/Thumbnail/index";

/**
 * Home
 */

function Home() {
  return (
    <div className = "Home">
      <Banner path = "/asset/background_image.png" />
      <Thumbnail />
    </div>
  );

  
}

export default Home;
