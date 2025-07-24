import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import Cursor from "./components/cursor/Cursor"; // ✅ correct import

function App() {
  return (
    <div>
      <Cursor />
      <Main />
    </div>
  );
}

export default App;
