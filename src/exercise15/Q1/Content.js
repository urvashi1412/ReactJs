import React, { useState } from "react";

const jokes = [
"Why don't skeletons fight each other? They don't have the guts!", "I'm on a whiskey diet. I've lost three days already.",
"Why do cows have hooves instead of feet? Because they lactose.", "Parallel lines have so much in common. It’s a shame they’ll never meet.",
];

const Content = () => {
const [joke, setJoke] = useState("Click the button to get a joke!");

const getRandomJoke = () => {
const randomIndex = Math.floor(Math.random() * jokes.length); setJoke(jokes[randomIndex]);
};

return (
<div>
<p>{joke}</p>
<button onClick={getRandomJoke}>Get Joke</button>
</div>
);
};

export default Content;
