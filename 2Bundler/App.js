import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title" }, "Hare Krishna!");

const heading2 = React.createElement("h2", {}, "Welcome to Bundler (Parcel)!");

const container = React.createElement("div", {}, heading1, heading2);

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
