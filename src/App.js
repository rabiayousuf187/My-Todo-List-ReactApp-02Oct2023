// import logo from './logo.svg';
import './App.css';
import { Form, Row, Button, Col, Input, Container, Table, Alert } from 'reactstrap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

function App() {
  let [value, setValue] = useState("")
  let [todo, setTodo] = useState([])
  let [todoList, setTodoList] = useState([]);
  let [saveList, setSaveList] = useState([]);
  let [completeList, setCompleteList] = useState([]);
  let [alarm, setAlarm] = useState({});
  let [color1, setColor1] = useState('secondary');
  let [color2, setColor2] = useState('');

  // let addTask = () => {
  //   setShowList([...todoList])
  // }
  let toggleColor = () =>{

    console.log("toggled color")
    setColor1( color1 === "" ? "secondary" : "" );
    setColor2( color2 === "" ? "secondary" : "" );
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    alert('List Added !');
    console.log("prev todo value ==== ", todoList);
    console.log("settteddd value ==== ", value);

    todo.isEditing === true && todo !== undefined ?
      setTodoList(todoList.map((val, ind) => {
        return val.id === todo.id ? { id: todo.id, task: value, isEditing: false, isCompleted: todo.isCompleted } : val;
      }))
      : setTodoList([...todoList, { id: uuidv4(), task: value, isEditing: false, isCompleted: false }]);
    console.log("save todo ==== ", todo)
    // addTask();
    setSaveList([...todoList])
    // console.log("set TODOOOOS === ", todoList);
    console.log("set saveList === ", saveList);


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
  let completeTask = (id) => {
    console.log(`completeTask ${id}`);
    let complete =  todoList.find((val) => {
      return (val.id === id)
    })
    setCompleteList([...completeList , { id: id, task: complete.task, isEditing: false, isCompleted: true }]);
    setTodoList(todoList.filter((val) => {
      return (val.id !== id)
    }));

    console.log(`after ccomplete todoList ${todoList}`);
  }
  let editTask = (id) => {
    console.log(`Edit Task ${id}`);
    let editValue = (todoList.find((val) => {
      return (val.id === id);
    }))
    // console.log(`Edit value ===  `,editValue[0].task);
    console.log(`Edit value ===  `, editValue.task);
    setValue(editValue.task);
    setTodo({ id: id, task: editValue.task, isEditing: true, isCompleted: false  });

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
          <div>
            <Button id="active" color={color1}  onClick={()=>{
              console.log("Show Active list")
              toggleColor();
              setSaveList(todoList);
              setTodoList(saveList);

              console.log("todolist == ",todoList)
              // setShowList(todoList);
            }}>
              Active
            </Button>
            {' '}
            <Button id ='complete' color={color2} onClick={()=>{
              console.log("Show Complete List", completeList);
              toggleColor();
              
              setSaveList(todoList);
              // setTodoList(completeList);
              setAlarm({color:"danger", msg: "No Task has Been Completed Yet"});
              completeList !== undefined? setTodoList(completeList):
              // <Alert color='danger'>No Task has Been Completed Yet</Alert>
              setAlarm({color:"danger", msg: "No Task has Been Completed Yet"})
            }}>
              Completed
            </Button>
          </div>
          <Table striped hover>
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
                todoList !== undefined? 
                todoList.map((val, ind) => {
                  console.log("value Row ==== ", val);
                  return (
                    <tr key={val.id}>
                      <th scope="row" key={val.id}>{ind + 1}</th>
                      <td>{val.task}</td>
                      <td className='status'>
                        
                        {val.isCompleted === false ? <Button color='success' onClick={() => { completeTask(val.id) }}>Done</Button> : null}
                        {val.isCompleted === false ? <Button color='danger' onClick={() => { editTask(val.id) }}>Edit</Button> : null}
                        <Button color='warning' onClick={() => { deleteTask(val.id) }}>Delete</Button>
                        
                      </td>
                    </tr>);
                }): completeList === undefined ? ()=>{return <tr><Alert color={alarm.color}>{alarm.msg}</Alert></tr>} : null
              }
            </tbody>
          </Table>
        </div>


      </Container>
    </div>
  );
}

export default App;
