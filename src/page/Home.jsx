import Header from "../component/Header.jsx";
import Banner from "../component/Banner.jsx"
import Footer from "../component/Footer.jsx";
import "../util/Header.css"

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <div className="Home-thumbnail">
      </div>
      <Footer />
    </div>
  );
}

export default Home;
