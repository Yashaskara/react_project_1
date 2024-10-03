const jsHeading = document.createElement("h1");
jsHeading.innerHTML = "<h2>Hello World from js</h2>";
jsHeading.className = "heading";
document.getElementById("js-root").appendChild(jsHeading);

// React Hello World
const container = document.getElementById("react-root");
// React needs a root element to render into
const root = ReactDOM.createRoot(container);
const element = React.createElement(
  "h1",
  { id: "react-heading", class: "heading" },
  "Hello World from React"
);
const element2 = React.createElement(
  "h2",
  {},
  "Hello World Sub Heading from React"
);
// render takes 2 args: what to render, where to render it
root.render([element, element2], container);
