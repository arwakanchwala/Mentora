import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { DELETE_TASK } from "../redux/action";
// This template is for deleteing the task
const TaskDelete = (props) => {
    const { id, name, desc } = props.location.state.task;
    const dispatch = useDispatch();
    return (
        <div className="main" >
            <div className="content">
                <div className="header"> Are you Sure you want to delete {`${name}`} Task </div>
                <button className="ui button blue center"
                    onClick={() => {
                        // Dispatch function on delete
                        dispatch({
                            type: DELETE_TASK,
                            payload: id,
                        });
                        props.history.push("/");
                    }} >Yes</button>
                <Link to="/">
                    <button className="ui button blue center">Back to Task List</button>
                </Link>

            </div>

        </div>
    );
}

export default TaskDelete;