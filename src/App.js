import "./App.css";
import Carousal from "./components/Carousel";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <div className="flex flex-col">
        <Carousal />
        <div>Carrosal</div>
        <div>Trending</div>
        <div>Popular </div>
        <div>LaunchPad </div>
        <div>Friends are watching </div>
      </div>
    </Container>
  );
}

export default App;
