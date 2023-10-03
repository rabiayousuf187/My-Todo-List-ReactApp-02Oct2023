// import logo from './logo.svg';
import './App.css';
import { Form, Row, Button, Col, Label, Input, Container } from 'reactstrap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {
  let [value, setValue] = useState("")
  let [todos, setTodos] = useState([])
  let handleSubmit = () => {

    alert('List Added !');

    setTodos(...todos, { id: uuidv4(), task: value });
    console.log("set TODOOOOS === ", todos);
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
                  type="email"
                  value={value}
                  onChange={(e) => {
                    console.log("INPUT ====", e.target.value);
                    setValue(e.target.value)
                  }}
                />
              </Col>
              <Col>
                <Button name='add' id='add' type='submit' color='primary'>
                  Submit
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
