import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskDetail from "./components/TaskDetail";
import TaskDelete from "./components/TaskDelete";
import EditTask from "./components/EditTask";

import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "tasks";
  const tasks = useSelector(state => state.list);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResult] = useState("");

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTaskList = tasks.filter((task) => {
        return Object.values(task).join("").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newTaskList);
    } else {
      setSearchResult(tasks);
    }
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (

    <div className="ui container">
      <Router>
        <Header />

        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <TaskList
                {...props}
                tasks={searchTerm.length < 1 ? tasks : searchResults}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddTask
                {...props}

              />
            )} />
          <Route
            path="/edit"
            render={(props) => (
              <EditTask
                {...props}
              />
            )} />
          <Route
            path='/task/:id' component={TaskDetail}
          />
          <Route
            path="/delete/:id"
            render={
              (props) => (
                <TaskDelete
                  {...props}
                />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
