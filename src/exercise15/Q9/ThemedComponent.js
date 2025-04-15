import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemedComponent = () => {
const { theme, toggleTheme } = useTheme();

return (
<div className="container">
<h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
<button onClick={toggleTheme}>Toggle Theme</button>
</div>
);
};

export default ThemedComponent;
