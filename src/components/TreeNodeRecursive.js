import React from "react";
import styled from "styled-components";

const TreeNodesRecursive = ({ nodes }) => {
  console.log(nodes);
  return nodes.map((item) => {
    if (item.isLast) {
      return <StyledNode>{item.name} </StyledNode>;
    }

    return (
      <StyledNodeLevel>
        {item.name}
        <TreeNodesRecursive nodes={item.childrens} />
      </StyledNodeLevel>
    );
  });
};

const StyledNode = styled.div`
  text-align: left;
`;

const StyledNodeLevel = styled(StyledNode)`
  margin-left: 30px;
`;
export default TreeNodesRecursive;
