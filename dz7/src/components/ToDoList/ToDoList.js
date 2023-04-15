import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editTodo, setDelete, setDone, setSearching, setTodo, todoSelect} from "../../redux/slices/todoSlice";
import {Box, Button, TextField, Typography} from "@mui/material";
import ModalEdit from "../ModalEdit/ModalEdit";

const ToDoList = () => {
  const dispatch = useDispatch()
  const {todos} = useSelector(todoSelect)
  const [text, setText] = useState('')
  const [open, setOpen] = useState()

  const handleOpen = (id) => setOpen(id)

  const handleChange = ({target}) => setText(target.value)

  const handleAdd = () => {
    dispatch(setTodo([...todos, { text: text, id: Date.now(), completed: false }]))
    setText('')
  }

  const handleDelete = (id) => {
    dispatch(setDelete(todos.filter(i => i.id !== id)))
  }

  const handleEdit = (edit) => {
    const editList = todos.map(i => {
      if (i.id === edit.id){
        return {...todos, text: edit.text}
      }
      return i
    })
    dispatch(editTodo([...editList]))
  }

  const handleDone = (id) => {
    const currentIndex = todos.findIndex((todo) => todo.id === id);
    todos[currentIndex].completed = !todos[currentIndex].completed;
    dispatch(setDone([...todos]));
  }


  return (
    <div className='box'>
      <Box>
        <Typography variant='h5'>{text}</Typography>
        <TextField
          onChange={handleChange}
          value={text}
          placeholder='ToDos'/>
        <Button onClick={handleAdd} variant='contained'>Add</Button>
      </Box>
      <ul>
        {
          todos.map(i => <li style={{display: "flex", columnGap: 20}} key={i.id}>
            <Typography style={i.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} component='span'>{i?.text}</Typography>
            <Button onClick={() => handleOpen(i.id)} variant='outlined'>Edit</Button>
            {
              i.id === open && <ModalEdit click={handleEdit} todos={todos} i={i}/>
            }
            <Button onClick={() => handleDone(i.id)}>Done</Button>
            <Button onClick={() => handleDelete(i.id)} variant='outlined' color='error'>Delete</Button>
          </li>)
        }
      </ul>
    </div>
  );
};

export default ToDoList;