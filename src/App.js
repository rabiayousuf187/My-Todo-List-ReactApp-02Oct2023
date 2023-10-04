// import logo from './logo.svg';
import './App.css';
import { Form, Row, Button, Col, Input, Container, Table } from 'reactstrap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

function App() {
  let [value, setValue] = useState("")
  let [todo, setTodo] = useState([])
  let [todoList, setTodoList] = useState([]);

  let addTask = (currentTodo) => {
    setTodoList([...todoList, currentTodo])
  }
  let handleSubmit = (e) => {
    e.preventDefault();

    alert('List Added !');
    console.log("prev todo value ==== ", todoList);
    console.log("settteddd value ==== ", value);

      todo.isEditing === true ? 
         setTodoList( todoList.map((val,ind)=>{
         return val.id === todo.id ? { id: todo.id, task: value, isEditing: false } : val;
        }))
     : setTodoList([...todoList, { id: uuidv4(), task: value, isEditing: false }]);
        console.log("save todo ==== ", todo)
        // addTask(todo);
        console.log("set TODOOOOS === ", todoList);
      

    setValue("");
    setTodo([]);

  }

  let deleteTask = (id) => {
    console.log(`Delete Task ${id}`);
    setTodoList(todoList.filter((val) => {
      return (val.id !== id)
    }));

    console.log(`after delete todoList ${todoList}`);
  }
  let editTask = (id) => {
    console.log(`Edit Task ${id}`);
    let editValue = (todoList.find((val) => {
      return (val.id === id);
    }))
    // console.log(`Edit value ===  `,editValue[0].task);
    console.log(`Edit value ===  `, editValue.task);
    setValue(editValue.task);
    setTodo({ id: id, task: editValue.task, isEditing: true });

  }
  return (
    <div className="App">
      <Container>
        <div className='form-div align-items-center'>
          <h3 className='text-center'>Task Management</h3>
          {/* <Form className="Form"> */}
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
                    setValue(e.target.value);
                    console.log("setted value ==== ", value);
                  }}
                />
              </Col>
              <Col>
                <Button name='add' id='add' type='submit' color='primary'>  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className='table-div'>
          <Table>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Task
                </th>
                <th>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {
                todoList.map((val, ind) => {
                  console.log("value Row ==== ", val);
                  return (
                    <tr key={val.id}>
                      <th scope="row" key={val.id}>{ind + 1}</th>
                      <td>{val.task}</td>
                      <td className='status'>
                        <Button color='success' onClick={() => { deleteTask(val.id) }}>Completed</Button>
                        <Button color='warning' onClick={() => { deleteTask(val.id) }}>Delete</Button>
                        <Button color='danger' onClick={() => { editTask(val.id) }}>Edit</Button>
                      </td>
                    </tr>);
                })}
            </tbody>
          </Table>
        </div>


      </Container>
    </div>
  );
}

export default App;
