import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

//material ui
import {
  Button,
  TextField,
  IconButton,
  Tooltip,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  ContentCut,
  ContentCopy,
  ContentPaste,
  TextDecrease as TextDecreaseIcon,
  TextIncrease as TextIncreaseIcon,
  DoneAll as DoneAllIcon,
  RemoveDone as RemoveDoneIcon,
  Assignment as AssignmentIcon,
  AddTask as AddTaskIcon,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";

export default function TodoApp() {
  let [todos, setTodo] = useState([
    { task: "Add a Task:", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedValue, setEditedValue] = useState("");

  let addtask = () => {
    setTodo([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    // filter is used to delete any element in an array it is strict method
    setTodo(todos.filter((todo) => todo.id !== id));
    setTodo((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id !== id)
    );
    console.log(id);
  };

  // uppercase all element in array:-
  function UppercaseAll() {
    setTodo((TODO) =>
      TODO.map((uppercase) => {
        return {
          ...uppercase,
          task: uppercase.task.toUpperCase(),
        };
      })
    );
  }

  // lowercase all element in array:-
  function LowercaseAll() {
    setTodo((TODO) =>
      TODO.map((lowercase) => {
        return {
          ...lowercase,
          task: lowercase.task.toLowerCase(),
        };
      })
    );
  }

  // let UppercaseOne = (id) => {
  //   setTodo((prevTodos) =>
  //     prevTodos.map((TODO) => {
  //       if (TODO.id === id) {
  //         return {
  //           ...TODO,
  //           task: TODO.task.toUpperCase(),
  //         };
  //       } else {
  //         return TODO;
  //       }
  //     })
  //   );
  // };

  //mark all done
  function Markalldone() {
    setTodo((TODO) =>
      TODO.map((uppercase) => {
        return {
          ...uppercase,
          isDone: true,
        };
      })
    );
  }

  //mark all none
  function Markallnone() {
    setTodo((TODO) =>
      TODO.map((uppercase) => {
        return {
          ...uppercase,
          isDone: false,
        };
      })
    );
  }

  // mark one task
  // let markAsDone = (id) => {
  //   setTodo((prevTodos) =>
  //     prevTodos.map((TODO) => {
  //       if (TODO.id === id) {
  //         return {
  //           ...TODO,
  //           isDone: true,
  //         };
  //       } else {
  //         return TODO;
  //       }
  //     })
  //   );
  // };


  return (
    <div className="App-header">
      <div className="bodies">
        <h3>ToDo-List App</h3>
        <TextField
          id="standard-basic"
          label="Tasks"
          variant="standard"
          value={newTodo}
          onChange={handleInputChange}
        />

        <Button
          title="Add Your Tasks"
          placement="top"
          variant="outlined"
          type="button"
          className="btn"
          onClick={addtask}
        >
          <AddTaskIcon></AddTaskIcon>
        </Button>
        <br />
        <br />
        <br />
        <hr />

        <h4 className="heading">
          <AssignmentIcon></AssignmentIcon>Today's-Task
        </h4>

        {/* map function is used to render(replace or add next element) all the element in array method it is strict method in array */}

        <div className="task-list">
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span
                  style={
                    todo.isDone ? { textDecorationLine: "Line-through" } : {}
                  }
                >
                  {" "}
                  {todo.task}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Tooltip title="Delete" style={{ color: "white" }}>
                  <IconButton>
                    <DeleteIcon onClick={() => deleteTask(todo.id)} />
                  </IconButton>
                </Tooltip>
                &nbsp;&nbsp;&nbsp;
                {/* <Tooltip title="Mark-as-Done" style = {{ color : 'white' }}>
                <span onClick={Markasdone}><DoneIcon></DoneIcon></span>
                </Tooltip> */}
                {/* <button type="button" onClick={markAsDone}>
                  Mark as Done
                </button>
                 <button type="button" onClick={UppercaseOne}>
                  Uppercase one
                </button>   */}
             
              </li>
            ))}
          </ol>
        </div>

        <Paper
          sx={{
            width: 450,
            height: 47,
            overflowY: "scroll",
            maxWidth: "100%",
            backgroundColor: "#3A6D8C",
            float: "right",
            color: "white",
          }}
        >
          <MenuList>
            <MenuItem>
              <TextIncreaseIcon>
                <ContentCut fontSize="small" />
              </TextIncreaseIcon>
              <ListItemText onClick={UppercaseAll}>Upper-Case</ListItemText>
            </MenuItem>
            <MenuItem>
              <TextDecreaseIcon>
                <ContentCopy fontSize="small" />
              </TextDecreaseIcon>
              <ListItemText onClick={LowercaseAll}>Lower-Case</ListItemText>
            </MenuItem>
            <MenuItem>
              <DoneAllIcon>
                <ContentPaste fontSize="small" />
              </DoneAllIcon>
              <ListItemText onClick={Markalldone}>Mark-All-Done</ListItemText>
            </MenuItem>
            <MenuItem>
              <RemoveDoneIcon>
                <ContentPaste fontSize="small" />
              </RemoveDoneIcon>
              <ListItemText onClick={Markallnone}>Mark-All-None</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>

        {/* <h4>Todays task pending is :{prevTodos.id}</h4> */}
      </div>
    </div>
  );
}
