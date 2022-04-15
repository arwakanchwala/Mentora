import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg"
// Task Details Template on clicking user name
const TaskDetail = (props) => {
    const { name, desc } = props.location.state.task;
    return (
        <div className="main" >
            <div className="ui card">
                <div className="image">
                    <img src={user} alt="user" className="user" />
                </div>
                <div className="content">
                    <div className="header"> {name}</div>
                    <div className="description"> {desc}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to Task List</button>
                </Link>
            </div>
        </div>
    );
}

export default TaskDetail;