import { BrowserRouter, Form, Route, Routes, NavLink } from "react-router-dom";

import "./styles.css";
import Main from "./components/main/main";
import Blogs from "./components/blogs/blogs";
import Questions from "./components/questions/questions";
import Support from "./components/support/support";
import Authentication from "./components/authentication/authentication";
import Chat from "./components/Chat/chat";
import css from "./components/main/main.module.css";
import Map from "./components/maps/map";

export default function App() {
  const Nav_link = () => {
    const Nav_link_arr = [
      ["Home", "/"],
      ["Blogs", "/blogs"],
      ["Questions", "/questions"],
      ["Support", "/support"],
      ["Authentication", "/authentication"],
      ["Chat", "/chat"],
      ["Map", "/map"],
    ];
    const Nav_link_list = Nav_link_arr.map((link) => (
      // <li>{link}</li>
      <li className="NavLink">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? css.activeLink : ""
          }
          to={link[1]}
          activeClassName={css.activeLink}
        >
          {link[0]}
        </NavLink>
      </li>
    ));
    return <ol>{Nav_link_list}</ol>;
  };

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
            Navbar
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
              <li className="nav-item">
                <NavLink className="nav-link" to="chat">
                  Chat
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
          <Route path="/chat" element={<Chat />} />

          <Route path="/map" element={<Map />} />
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
          <li className="NavLink">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? css.activeLink : ""
              }
              to="/chat"
            >
              Chat
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? css.activeLink : ""
              }
              to="/map"
            >
              Map
            </NavLink>
          </li>
        </ol>
        <Nav_link />
      </BrowserRouter>
    </div>
  );
}
