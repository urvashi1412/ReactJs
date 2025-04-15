import React, { useState, useEffect } from "react";

const JokeFetcher = () => {
const [joke, setJoke] = useState("");

// Function to fetch a joke 
const fetchJoke = async () => {
try {
const response = await
fetch("https://official-joke-api.appspot.com/jokes/random"); const data = await response.json();
setJoke(`${data.setup} - ${data.punchline}`);
} catch (error) {
setJoke("Failed to fetch a joke 😢");
}
};

// Fetch joke on component mount 
useEffect(() => {
fetchJoke();
}, []);

return (
<div>
<h2>Random Joke</h2>
<p>{joke}</p>
<button onClick={fetchJoke}>Get New Joke</button>
</div>
);
};

export default JokeFetcher;
