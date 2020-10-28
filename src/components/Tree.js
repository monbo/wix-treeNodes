import TreeNodesRecursive from "./TreeNodeRecursive";

const Tree = ({ nodes, children }) => {
  // Component handles recursively passed nodes, if not render down children
  const isRecursive = nodes && !children;

  return (
    <div>{isRecursive ? <TreeNodesRecursive nodes={nodes} /> : children}</div>
  );
};
export default Tree;
