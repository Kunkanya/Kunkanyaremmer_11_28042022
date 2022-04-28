import Header from "../component/Header.jsx";
import ImageBar from "../component/ImageBar.jsx"
import "../util/Header.css"
function Home() {
  return (
    <div className="Home">
      <Header />
      <ImageBar />
      <div className="Home-thumbnail">
      </div>
    </div>
  );
}

export default Home;
