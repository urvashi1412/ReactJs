import React from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import HelloReact1 from "./questions/1";
import HellReact from "./questions/2";
import FruitList from "./questions/3";
import StyledMessage from "./questions/4";
import SumOfSquares from "./questions/5";
import Greeting from "./questions/6";
import CurrentDay from "./questions/7";
import PrimeChecker from "./questions/8";
import TemperatureConverter from "./questions/9";
import StringManipulation from "./questions/10";
import RandomNumberGenerator from "./questions/11";
import LeapYearChecker from "./questions/12";
import Q13Wrapper from "./questions/13";

// 🧭 Navigation buttons mapped to route paths
const buttons = [
  { path: "/HelloReact1", label: "Question 1" },
  { path: "/HellReact", label: "Question 2" },
  { path: "/FruitList", label: "Question 3" },
  { path: "/StyledMessage", label: "Question 4" },
  { path: "/SumOfSquares", label: "Question 5" },
  { path: "/Greeting", label: "Question 6" },
  { path: "/CurrentDay", label: "Question 7" },
  { path: "/PrimeChecker", label: "Question 8" },
  { path: "/TemperatureConverter", label: "Question 9" },
  { path: "/StringManipulation", label: "Question 10" },
  { path: "/RandomNumberGenerator", label: "Question 11" },
  { path: "/LeapYearChecker", label: "Question 12" },
  { path: "/UserGreeting", label: "Question 13" }

];

// 🏠 Home Page
function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Exercise 13(ReactJs)</h1>
      {buttons.map((btn, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <button onClick={() => navigate(btn.path)}>{btn.label}</button>
        </div>
      ))}
    </div>
  );
}

// 🌐 App Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HelloReact1" element={<HelloReact1 />} />
        <Route path="/HellReact" element={<HellReact />} />
        <Route path="/FruitList" element={<FruitList />} />
        <Route path="/StyledMessage" element={<StyledMessage />} />
        <Route path="/SumOfSquares" element={<SumOfSquares />} />
        <Route path="/Greeting" element={<Greeting />} />
        <Route path="/CurrentDay" element={<CurrentDay />} />
        <Route path="/PrimeChecker" element={<PrimeChecker />} />
        <Route path="/TemperatureConverter" element={<TemperatureConverter />} />
        <Route path="/StringManipulation" element={<StringManipulation />} />
        <Route path="/RandomNumberGenerator" element={<RandomNumberGenerator />} />
        <Route path="/LeapYearChecker" element={<LeapYearChecker />} />
        <Route path="/UserGreeting" element={<Q13Wrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
