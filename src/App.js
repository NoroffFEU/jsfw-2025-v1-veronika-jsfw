import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.color.primary};
`;

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
