import React, {useState} from 'react';
import { Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {editTodo} from "../../redux/slices/todoSlice";

const ModalEdit = ({ todos, i, click }) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(i.text)

  const handleChange = ({target}) => setEdit(target.value)


  return (
    <>
        <TextField value={edit} onChange={handleChange} placeholder='edit'/>
        <Button onClick={() => {
          click({
            id: i.id,
            text: edit,
            completed: i.completed
          })
        }} variant='contained'>Save</Button>
    </>
  );
};

export default ModalEdit;