/**
 * Nested html element
 * <div id="parent">
 *    <div id="child">
 *    <h1> I'am Iron Man</h1>
 *  </div>
 * </div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World from React!"),
    React.createElement("h1", {}, "Hello World from React!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "Hello World from React!"),
    React.createElement("h2", {}, "Hello World from React!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
