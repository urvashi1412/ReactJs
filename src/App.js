import React from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import HelloReact1 from "./exercise13/1";
import HellReact from "./exercise13/2";
import FruitList from "./exercise13/3";
import StyledMessage from "./exercise13/4";
import SumOfSquares from "./exercise13/5";
import Greeting from "./exercise13/6";
import CurrentDay from "./exercise13/7";
import PrimeChecker from "./exercise13/8";
import TemperatureConverter from "./exercise13/9";
import StringManipulation from "./exercise13/10";
import RandomNumberGenerator from "./exercise13/11";
import LeapYearChecker from "./exercise13/12";
import Q13Wrapper from "./exercise13/13";
import Ex14_Q1 from './exercise14/Q1/14_1';
import Ex14_Q2 from './exercise14/Q2/14_2';
import Ex14_Q3 from './exercise14/Q3/ProfilePage';
import Ex15_Q1 from './exercise15/Q1/15_1';
import Ex15_Q2 from './exercise15/Q2/15_2';
import Ex15_Q3 from './exercise15/Q3/15_3';
import Ex15_Q4 from './exercise15/Q4/15_4';
import Ex15_Q5 from './exercise15/Q5/15_5';
import Ex15_Q6_1 from './exercise15/Q6/6.1/15_6';
import Ex15_Q6_2 from './exercise15/Q6/6.2/Counter';
import Ex15_Q7 from './exercise15/Q7/15_7';
import Ex15_Q8 from './exercise15/Q8/15_8';
import Ex15_Q9 from './exercise15/Q9/15_9';
import Ex15_Q10 from './exercise15/Q10/15_10';
import Ex15_Q11 from './exercise15/Q11/Parent';
import Ex15_Q12_1 from './exercise15/Q12/12.1/15_12';
import Ex15_Q12_2 from './exercise15/Q12/12.2/15_12.2';

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1> ReactJs Exercises</h1>
      <button onClick={() => navigate("/exercise13")}>Exercise 13</button>
      <br /><br />
      <button onClick={() => navigate("/exercise14")}>Exercise 14</button>
      <br /><br />
      <button onClick={() => navigate("/exercise15")}>Exercise 15</button>
    </div>
  );
}

function Exercise13Page() {
  const navigate = useNavigate();
  const buttons13 = [
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

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Exercise 13</h2>
      {buttons13.map((btn, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <button onClick={() => navigate(btn.path)}>{btn.label}</button>
        </div>
      ))}
    </div>
  );
}

function Exercise14Page() {
  const navigate = useNavigate();
  const buttons14 = [
    { path: "/Ex14_Q1", label: "Question 1" },
    { path: "/Ex14_Q2", label: "Question 2" },
    { path: "/Ex14_Q3", label: "Question 3" }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Exercise 14</h2>
      {buttons14.map((btn, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <button onClick={() => navigate(btn.path)}>{btn.label}</button>
        </div>
      ))}
    </div>
  );
}

function Exercise15Page() {
  const navigate = useNavigate();
  const buttons15 = [
    { path: "/Ex15_Q1", label: "Question 1" },
    { path: "/Ex15_Q2", label: "Question 2" },
    { path: "/Ex15_Q3", label: "Question 3" },
    { path: "/Ex15_Q4", label: "Question 4" },
    { path: "/Ex15_Q5", label: "Question 5" },
    { path: "/Ex15_Q6_1", label: "Question 6_1" },
    { path: "/Ex15_Q6_2", label: "Question 6_2" },
    { path: "/Ex15_Q7", label: "Question 7" },
    { path: "/Ex15_Q8", label: "Question 8" },
    { path: "/Ex15_Q9", label: "Question 9" },
    { path: "/Ex15_Q10", label: "Question 10" },
    { path: "/Ex15_Q11", label: "Question 11" },
    { path: "/Ex15_Q12_1", label: "Question 12_1" },
    { path: "/Ex15_Q12_2", label: "Question 12_2" }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Exercise 15</h2>
      {buttons15.map((btn, index) => (
        <button key={index} onClick={() => navigate(btn.path)} style={{ margin: '10px' }}>
          {btn.label}
        </button>
      ))}
    </div>
  );
}

// Main App Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise13" element={<Exercise13Page />} />
        <Route path="/exercise14" element={<Exercise14Page />} />
        <Route path="/exercise15" element={<Exercise15Page />} />

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
        <Route path="/Ex14_Q1" element={<Ex14_Q1 />} />
        <Route path="/Ex14_Q2" element={<Ex14_Q2 />} />
        <Route path="/Ex14_Q3" element={<Ex14_Q3 />} />
        <Route path="/Ex15_Q1" element={<Ex15_Q1 />} />
        <Route path="/Ex15_Q2" element={<Ex15_Q2 />} />
        <Route path="/Ex15_Q3" element={<Ex15_Q3 />} />
        <Route path="/Ex15_Q4" element={<Ex15_Q4 />} />
        <Route path="/Ex15_Q5" element={<Ex15_Q5 />} />
        <Route path="/Ex15_Q6_1" element={<Ex15_Q6_1 />} />
        <Route path="/Ex15_Q6_2" element={<Ex15_Q6_2 />} />
        <Route path="/Ex15_Q7" element={<Ex15_Q7 />} />
        <Route path="/Ex15_Q8" element={<Ex15_Q8 />} />
        <Route path="/Ex15_Q9" element={<Ex15_Q9 />} />
        <Route path="/Ex15_Q10" element={<Ex15_Q10 />} />
        <Route path="/Ex15_Q11" element={<Ex15_Q11 />} />
        <Route path="/Ex15_Q12_1" element={<Ex15_Q12_1 />} />
        <Route path="/Ex15_Q12_2" element={<Ex15_Q12_2 />} />
      </Routes>
    </Router>
  );
}

export default App;
