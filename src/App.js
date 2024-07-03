import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import todosReducer, { ACTION } from './utils/todosReducer';
import './style.css';

export default function App() {
  const [input, setInput] = useState('');
  const { todos, dispatch } = todosReducer();
  console.log(todos);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.add, payload: { name: input } });
    setInput('');
  };
  return (
    <Container>
      <Form
        className="d-flex justify-content-evenly my-2"
        onSubmit={handleFormSubmit}
      >
        <Form.Control
          className="w-75"
          placeholder="Enter to-do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Add todo</Button>
      </Form>
      <div>
        {todos.map((ele) => (
          <div
            key={ele.name}
            className={`d-flex justify-content-evenly my-1 ${
              ele.isComplete ? 'bg-success text-white' : ''
            }`}
          >
            <span>{ele.name}</span>
            <ButtonGroup>
              <Button
                variant={!ele.isComplete ? 'success' : 'info'}
                onClick={() =>
                  dispatch({ type: ACTION.toggle, payload: { name: ele.name } })
                }
              >
                {!ele.isComplete ? 'V' : 'O'}
              </Button>
              <Button
                id={ele.name}
                variant="danger"
                onClick={() =>
                  dispatch({ type: ACTION.remove, payload: { name: ele.name } })
                }
              >
                X
              </Button>
            </ButtonGroup>
          </div>
        ))}
      </div>
    </Container>
  );
}
