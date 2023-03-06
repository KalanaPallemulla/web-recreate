import "./App.css";
import Carousal from "./components/Carousel";
import Container from "./components/Container";
import Trending from "./components/Trending";

function App() {
  return (
    <Container>
      <div className="flex flex-col">
        <div className="h-24 w-24">{/* <Carousal /> */}</div>

        {/* <div>Carrosal</div> */}

        <Trending />
        <div>Popular</div>
        <div>LaunchPad</div>
        <div>Friends are watching</div>
      </div>
    </Container>
  );
}

export default App;
