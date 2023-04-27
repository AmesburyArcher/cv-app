import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Resume from "./Resume";

function App() {
  // 0 for editing, 1 for viewing
  const [mode, setMode] = useState(0);

  const buttonEdit = document.querySelector(".edit__mode__button");
  const buttonView = document.querySelector(".view__mode__button");

  const handleModeEdit = function () {
    buttonView.classList.remove("active");
    buttonEdit.classList.add("active");
    setMode(0);
  };
  const handleModeView = function () {
    buttonEdit.classList.remove("active");
    buttonView.classList.add("active");
    setMode(1);
  };
  return (
    <div className="App">
      <Header handleModeEdit={handleModeEdit} handleModeView={handleModeView} />
      <Resume />
    </div>
  );
}

export default App;
