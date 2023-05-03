import { useState, useRef } from "react";
import "../styles/App.css";
import Header from "./Header";
import Resume from "./Resume";

function App() {
  // 0 for editing, 1 for viewing
  const [mode, setMode] = useState(0);

  const handleModeEdit = function () {
    setMode(0);
  };
  const handleModeView = function () {
    setMode(1);
  };
  return (
    <div className="App">
      <Header
        handleModeEdit={handleModeEdit}
        handleModeView={handleModeView}
        mode={mode}
      />
      <Resume mode={mode} />
    </div>
  );
}

export default App;
