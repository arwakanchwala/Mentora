import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { UPDATE_TASK } from "../redux/action";
// Update Taske template
const EditTask = (props) => {
    const [task,setTask]= useState(props.location.state.task);
    const {id, name, desc} = task
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setTask({...task,[name]:value});
    };

    const update = (e) => {
        e.preventDefault();
        if(name === "" || desc === "") {
            alert("all fields are mandatory!");
            return;
        }
        // dispatch method called
        dispatch({
            type: UPDATE_TASK,
            payload: task,
        });

        setTask({name: "",desc:""});
        props.history.push("/");
    };

    return(
        <div className="ui main">
            <h2> Edit Task</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input 
                     type="text"
                     name="name"
                     placeholder="Name"
                     value={name}
                     onChange={handleInputChange}></input>
                </div>
                <div className="field">
                    <label>Desc</label>
                    <input 
                    type="text" 
                    name="desc" 
                    placeholder="Desc"
                    value={desc}
                    onChange={handleInputChange}></input>
                </div>
                <button className="ui button blue">update</button>
            </form>
        </div>
    );
}

export default EditTask;
