import Header from "../component/Header.jsx";
import ImageBar from "../component/ImageBar.jsx"
import Footer from "../component/Footer.jsx";
import "../util/Header.css"
function Home() {
  return (
    <div className="Home">
      <Header />
      <ImageBar />
      <div className="Home-thumbnail">
      </div>
      <Footer />
    </div>
  );
}

export default Home;
