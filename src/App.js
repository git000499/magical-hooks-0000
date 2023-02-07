import { BrowserRouter, Form, Route, Routes, NavLink } from "react-router-dom";

import "./styles.css";
import Main from "./components/main/main";
import Blogs from "./components/blogs/blogs";
import Questions from "./components/questions/questions";
import Support from "./components/support/support";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <ol className="NavLink">
          <li className="NavLink">
            <NavLink className="NavLink" to="/">
              HOME
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink className="NavLink" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink className="NavLink" to="/questions">
              Questions
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink className="NavLink" to="/support">
              Support
            </NavLink>
          </li>
        </ol>
      </BrowserRouter>
      <h1>_____________________________</h1>
      <h2>!</h2>
    </div>
  );
}
