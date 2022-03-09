import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Alert } from 'react-bootstrap';

import './App.css';

import ShowTasks from './ShowTasks';
import Analysis from './Analysis';

const info = {
  title: '',
  subTitle: '',
  assignTo: '',
  start: '',
  end: '',
  priority: '',
  status: '',
  range: '20',
};

function App() {
  const [task, setTask] = useState(info);
  const [tasks, setTasks] = useState([]);
  const [taskError, setTaskError] = useState(null);

  const [total, setTotal] = useState(0);
  const [newTask, setNewTask] = useState(0);
  const [inprogress, setInprogress] = useState(0);
  const [completed, setCompleted] = useState(0);

  const changeHandler = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    setTaskError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { title, subTitle, assignTo, start, end, priority, status, range } =
      task;

    if (
      title === '' ||
      subTitle === '' ||
      assignTo === '' ||
      start === '' ||
      end === '' ||
      priority === '' ||
      status === '' ||
      range === ''
    ) {
      setTaskError('Please Fill Up All The Necessary  Fields');
    } else {
      setTasks([...tasks, task]);
      setTotal(++tasks.length);
    }

    // reset state
    setTask(info);
  };

  const { title, subTitle, assignTo, start, end, priority, status, range } =
    task;

  // play with local storage

  return (
    <>
      <Container>
        <h2 className="text-center mt-4 mb-4">Your Task Manager</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              onChange={changeHandler}
              value={title}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sub Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter task details"
              name="subTitle"
              onChange={changeHandler}
              value={subTitle}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Assign To</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter name whom you have to assign to"
              name="assignTo"
              onChange={changeHandler}
              value={assignTo}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start:</Form.Label>
            <Form.Control
              type="date"
              name="start"
              onChange={changeHandler}
              value={start}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>End:</Form.Label>
            <Form.Control
              type="date"
              name="end"
              onChange={changeHandler}
              value={end}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Priority -</Form.Label>
            <Form.Check
              inline
              type="radio"
              label="High"
              name="priority"
              onChange={changeHandler}
              value="high"
              checked={priority === 'high'}
            />
            <Form.Check
              inline
              type="radio"
              label="Low"
              name="priority"
              onChange={changeHandler}
              value="low"
              checked={priority === 'low'}
            />
            <Form.Check
              inline
              type="radio"
              label="Medium"
              name="priority"
              onChange={changeHandler}
              value="medium"
              checked={priority === 'medium'}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status -</Form.Label>
            <Form.Check
              inline
              type="radio"
              label="New"
              name="status"
              onChange={changeHandler}
              value="new"
              checked={status === 'new'}
            />
            <Form.Check
              inline
              type="radio"
              label="In Progress"
              name="status"
              onChange={changeHandler}
              value="inProgress"
              checked={status === 'inProgress'}
            />
            <Form.Check
              inline
              type="radio"
              label="Completed"
              name="status"
              onChange={changeHandler}
              value="completed"
              checked={status === 'completed'}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Range</Form.Label>
            <Form.Range name="range" onChange={changeHandler} value={range} />
            <p>show in percent : {range}%</p>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>

        <br />
        {taskError && <Alert variant="warning">{taskError}</Alert>}
      </Container>

      <Analysis tasks={tasks} total={total} />

      <ShowTasks tasks={tasks} />
    </>
  );
}

export default App;
