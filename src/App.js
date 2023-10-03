// import logo from './logo.svg';
import './App.css';
import { Form, Row, Button, Col, Input, Container } from 'reactstrap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

function App() {
  let [value, setValue] = useState("")
  let todo = [];
  // let [todo, setTodo] = useState([])
  let [todos, setTodos] = useState([])
  let addTask = (currentTodo) =>{
    setTodos([...todos, currentTodo]);
  }
  let handleSubmit = (e) => {
    e.preventDefault();

    alert('List Added !');
    console.log("prev todo value ==== ", todos)
    console.log("settteddd value ==== ", value)

    todo = { id: uuidv4(), task: value };
    console.log("save todo ==== ", todo)

    addTask(todo);
    console.log("set TODOOOOS === ", todos);
    setValue("");
    // setValue(setValue(e.target.value))
  }

  return (
    <div className="App">
      <Container>
        <div className='form-div align-items-center'>
          <h3 className='text-center'>Task Management</h3>
          <Form className="Form" onSubmit={handleSubmit}>
            <Row className="row-cols-lg-auto g-3 justify-content-center align-items-center">
              <Col className=''>
                <Input
                  id="task"
                  name="task"
                  placeholder="Enter your Future Task"
                  type="text"
                  value={value}
                  onChange={(e) => {
                    console.log("INPUT ====", e.target.value);
                    setValue(e.currentTarget.value);
                    console.log("setted value ==== ", value);
                  }}
                />
              </Col>
              <Col>
                <Button name='add' id='add' type='submit' color='primary'>
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </div>


      </Container>
    </div>
  );
}

export default App;
