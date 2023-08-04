import React, { useState } from "react";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TaskText = styled.span`
display: block;
word-break: break-all;

`;

const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
`;

const FormWrapper = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  margin-left: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TodoListWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Добавьте новую задачу..."
        />
        <AddButton type="submit">Добавить задачу</AddButton>
      </FormWrapper>
      {tasks.map((task) => (
        <TaskWrapper key={task.id} completed={task.completed}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <TaskText>{task.text}</TaskText>
        <DeleteButton onClick={() => removeTask(task.id)}>Удалить</DeleteButton>
      </TaskWrapper>
      ))}
    </TodoListWrapper>
  );
};

export default TodoApp;