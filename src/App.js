import React from "react";
import "./App.css";
import Tree from "./components/Tree";

// Example nodes
const nodesExample = [
  {
    isLast: false,
    name: "node 1",
    childrens: [
      {
        isLast: false,
        name: "1 nest node 1",
        childrens: [
          {
            isLast: false,
            name: "2 nest node 1",
            childrens: [{ isLast: true, name: "3 nest node 1" }],
          },
          { isLast: true, name: "2 nest node 1" },
        ],
      },
      { isLast: true, name: "1 nest node 2" },
      { isLast: true, name: "1 nest node 3" },
    ],
  },
  { isLast: true, name: "node 2" },
];

function App() {
  // State used to add nodes
  const [treeNodes, setTreeNodes] = React.useState([]);

  const handleClick = () => {
    setTreeNodes([...treeNodes, "newItem"]);
  };

  return (
    <div className="App">
      <div>
        <Tree nodes={nodesExample} />
      </div>

      <button onClick={handleClick}>Add new node</button>
      {treeNodes.map((node, index) => (
        <span key={index}>{node} </span>
      ))}
    </div>
  );
}

export default App;
