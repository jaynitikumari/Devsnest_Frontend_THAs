import "./styles.css";
import GetInstructions from "./Components/Instructions";
import CalorieCard from "./Components/CalorieCard";
import { useState } from "react";

const instructions = {
  0: "build a container",
  1: "create a seperate function and use it as a component",
  2: 'pass props "calory and food" and call it to main component'
};

const menuitems = [
  ["Pizza", 56],
  ["Berger", 69],
  ["Coke", 500],
  ["Browne", 180],
  ["Fried Rice", 90],
  ["Lassania", 200],
  ["Pani Puri", 10]
];

export default function App() {
  const [menu, setMenu] = useState(menuitems);

  return (
    <div className="App">
      <GetInstructions inst={instructions} />
      <CalorieCard menu={menu} setCard={setMenu} />
    </div>
  );
}
