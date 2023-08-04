import React from "react";
import TodoApp from "./components/Todo";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  padding-top: 50px;
`;

const Title = styled.h1`
  color: #333;
`;

const App = () => {
  return (
    <AppWrapper>
      <Title>Список задач</Title>
      <TodoApp />
    </AppWrapper>
  );
};

export default App;
