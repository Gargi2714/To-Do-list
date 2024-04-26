import { useState } from "react";
import "./index.css";
import writingIcon from "../../images/writing.png";
import { FaPen, FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
const ToDo=() => {
    const [todoList, setTodo]= useState([])
    const [inputTodo, setinputTodo]= useState("")

    const addTask =() =>{
        if (inputTodo.trim() !== "") {
            setTodo([...todoList, inputTodo]);
            setinputTodo("");
        }
    }

    const inputTask =(event) =>{
        setinputTodo(event.target.value)
    }
    const deletetask= (index) => {
        const updatedTodoList = todoList.filter((_, i) => i !== index);
        setTodo(updatedTodoList);

    }
    
return(
    <div className="background">
    <div className="container">
        <h2 className="title">To Do List</h2>

        <label><input value={inputTodo} type="text" onChange={inputTask} className="inputTask"></input>

        <button className="addtask" onClick={addTask}>
         <FaPen />
        </button>
        </label>
        <br/>
        <br/>
        <ul className="ul-list">
            {
                todoList.map((todo, index) => (
                    <li key={index} className="li-list">

                        <input type="checkbox" className="checkbox"></input>

                       <div className="list">{todo}</div>

                    <button onClick={() => deletetask(index)} className="deleteTask">
                        <FaTrash />
                    </button>
                    </li>
                ))
            }
        </ul>
    </div>
    </div>
)
}
export default ToDo;
