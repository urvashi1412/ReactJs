import React, { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";

const App = () => {
const [showComponent, setShowComponent] = useState(true);

return (
<div>
<h1>React Lifecycle Methods Demo</h1>
<button onClick={() => setShowComponent(!showComponent)}>
{showComponent ? "Unmount Component" : "Mount Component"}
</button>

{showComponent && <LifecycleDemo />}
</div>
);
};

export default App;
