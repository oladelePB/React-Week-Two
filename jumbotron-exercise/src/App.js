import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./Jumbotron/Jumbotron";

function App() {
  const backGroundColor = "#e9ecef";

  const backGroundColor2 = "Yellow";
  const primaryHeading = "Hello World";
  const primaryText =
    "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information";
  const secondaryTexts =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, hic.";
  const btnText = "Learn More";
  const btnBackgroundColor = "#007bff";
  return (
    <div className="App">
      <Jumbotron
        primaryText={primaryText}
        primaryHeading={primaryHeading}
        backGroundColor={backGroundColor}
        secondaryText={secondaryTexts}
        buttonText={btnText}
        btnBackgroundColor={btnBackgroundColor}
      />
    </div>
  );
}

export default App;
