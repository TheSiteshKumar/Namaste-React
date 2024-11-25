import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 id="title">Hare Krishna!</h1>;

const x = 10;
const y = 20;
function App() {
  return (
    <>
      {title}
      {console.log(x+y)}
      <h1>Functional Component</h1>
      <h2>Another heading</h2>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
