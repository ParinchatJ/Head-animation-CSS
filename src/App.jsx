import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="textcosAbout">
        <div className="headAbout" data-text="&nbsp;WELCOME&nbsp;TO&nbsp;PARINCHATJ">
          &nbsp;WELCOME TO PARINCHATJ
        </div>
        <p className="catAbout">🐈</p>
      </div>
    </div>
  );
}

export default App;
