import { BrowserRouter, Form, Route, Routes, NavLink } from "react-router-dom";

import "./styles.css";
import Main from "./components/main/main";
import Blogs from "./components/blogs/blogs";
import Questions from "./components/questions/questions";
import Support from "./components/support/support";
import Authentication from "./components/authentication/authentication";
import css from "./components/main/main.module.css";

export default function App() {
  return (
    <div className="App">
      <link
        crossorigin
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      />
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar w/ text
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Questions">
                  Questions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Support">
                  Support
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Authentication">
                  Authentication
                </NavLink>
              </li>
            </ul>
            <span className="navbar-text">Navbar</span>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>

        <ol className="NavLink">
          <li className="NavLink">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? css.activeLink : ""
              }
              to="/"
              activeClassName={css.activeLink}
            >
              HOME
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? css.activeLink : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? css.activeLink : ""
              }
              to="/questions"
            >
              Questions
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? css.activeLink : ""
              }
              to="/support"
            >
              Support
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? css.activeLink : ""
              }
              to="/Authentication"
            >
              Authentication
            </NavLink>
          </li>
        </ol>
      </BrowserRouter>
    </div>
  );
}
