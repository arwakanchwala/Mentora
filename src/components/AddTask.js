import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ADD_TASK } from "../redux/action";

const AddTask = (props) => {
    const [task, setTask] = useState({
        name: '',
        desc: ''
    })
    const dispatch = useDispatch();
    const handelChange = (e) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value
        })
    }
    const add = (e) => {
        e.preventDefault();
        const { name, desc } = task;
        if (name === "" || desc === "") {
            alert("all fields are mandatory!");
            return;
        }
        // Dispatching the details
        dispatch({
            type: ADD_TASK,
            payload: {
                name: name,
                desc: desc
            }
        });
        setTask({
            name: '',
            desc: ''
        })
        props.history.push("/");
    }
// UI of Add Task Page
    return (<div className="ui main">
        <h2> Add Task</h2>
        <form className="ui form" onSubmit={add}>
            <div className="field">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={task.name}
                    onChange={handelChange}></input>
            </div>
            <div className="field">
                <label>Desc</label>
                <input
                    type="text"
                    name="desc"
                    placeholder="Desc"
                    value={task.desc}
                    onChange={handelChange}></input>
            </div>
            <button className="ui button blue">Add</button>
        </form>
    </div>
    );
}
export default AddTask;
