import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";
import {useDispatch} from "react-redux";
import { TASK_COMPLETED } from "../redux/action";
// Task card which shows on Dashboard
const TaskCard = (props) => {
    const { id, name, desc, time, completed } = props.task;
    const dispatch = useDispatch();
    const taskCompleted = () => {
        dispatch({
            type: TASK_COMPLETED,
            payload: id,
        });
    }
    return (
        <div className={`item`}>
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <Link to={{ pathname: `/task/${id}`, state: { task: props.task } }}>
                    <div className="header">{name}
                    <div className={`status ${completed ? 'completed' : ''}`}>Task completed</div></div>
                    <div>{desc}</div>
                    <div className = "date_created">Date Created: {time}</div>
                </Link>
            </div>
            <div className="actions">

                <Link to={{ pathname: `/delete/${id}`, state: { task: props.task } }}>
                    <i className="trash alternate outline icon"></i>
                </Link>
                {!completed && <Link to={{ pathname: `/edit`, state: { task: props.task } }}>
                    <i className="edit alternate outline icon"></i>
                </Link>}
                {!completed && <button onClick={taskCompleted} className="comp">
                    <i className="check icon"></i>
                </button>}
            </div>
        </div>
    );
}

export default TaskCard;