import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import Main from './main';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
       <Route path="/Main" element={<Main />}/>
        </Routes>
  </Router>,
  document.getElementById("root")
);

