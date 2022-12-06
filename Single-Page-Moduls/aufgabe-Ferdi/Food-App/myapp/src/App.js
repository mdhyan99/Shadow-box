import Food from "./Food/Food";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Header from "./componentes/Header/Header" 
import "./App.css";

const favoriteFood = [
    {
        name: "spagite",
        imag: "https://image.livingathome.de/12881040/t/Js/v2/w1440/r1.5/-/lah200809spaghetti-mit-frischer-tomatensosse-jpg--52977-.jpg",
    },
    {
        name: "Sprotten ",
        imag: "https://image.livingathome.de/12881040/t/Js/v2/w1440/r1.5/-/lah200809spaghetti-mit-frischer-tomatensosse-jpg--52977-.jpg",
    },
    {
        name: "spagite",
        imag: "https://image.livingathome.de/12881040/t/Js/v2/w1440/r1.5/-/lah200809spaghetti-mit-frischer-tomatensosse-jpg--52977-.jpg",
    },
    {
        name: "spagite",
        imag: "https://image.livingathome.de/12881040/t/Js/v2/w1440/r1.5/-/lah200809spaghetti-mit-frischer-tomatensosse-jpg--52977-.jpg",
    },
    {
      name: "spagite",
      imag: "https://image.livingathome.de/12881040/t/Js/v2/w1440/r1.5/-/lah200809spaghetti-mit-frischer-tomatensosse-jpg--52977-.jpg",
  },
];
const foodContainer = favoriteFood.map((el, index) => {
    return (
      <Col key={index}>
      <Food  food={el} />
      </Col>
    );
});
console.log(foodContainer);
function App() {
    return (
        <div className="App">
         <Container>
          <Header />
         <h1>Unsere Lieblings Food</h1>
            <Button variant="outline-primary" size="lg">Filter</Button>
            <Row>

            {foodContainer}
            </Row>
         </Container>
        </div>
    );
}

export default App;
