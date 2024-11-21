// Create h1 element
const heading1 = React.createElement("h1", { id: "title" }, "hare Krishna!");

// Create h2 element
const heading2 = React.createElement("h2", {}, "Welcome to React");

// Create a parent div to contain both headings
const container = React.createElement("div", {}, heading1, heading2);

// Log the container element
console.log(container);

// Create the root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the container inside the root
root.render(container);
