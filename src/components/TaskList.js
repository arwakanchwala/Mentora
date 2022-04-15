import React, { useRef } from "react";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { DELETE_ALL } from "../redux/action";
// Task List and from where we search our tasks
const TaskList = (props) => {
    const dispatch = useDispatch();
    const inputEl = useRef("");
    const deleteTaskHandler = (id) => {
        props.getTaskId(id);
    };
    const handleDeleteAll = () => {
        // const result = confirm("Are you sure you want to delete All Task");
        if(window.confirm("Are you sure you want to delete All Task")) {
            dispatch({type: DELETE_ALL});
        }
       
    }
    const renderTaskList = props.tasks.map((task) => {
        return (
            <TaskCard task={task} clickHandler={deleteTaskHandler} key={task.id} />
        );
    });
    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    }
    return (
        <div className="main">
            <h2> Task List
                <Link to="/add">
                    <button className="ui button blue right" style={{ marginLeft: "4em" }}>Add Task</button>
                </Link>
                <button disabled = {!props.tasks.length} onClick={handleDeleteAll} className="ui button blue right" style={{ marginLeft: "2em" }}>Delete All </button>
            </h2>

            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search tasks" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderTaskList.length > 0 ? renderTaskList : "No Task Available"} </div>
        </div>

    );
};

export default TaskList;