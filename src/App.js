import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";

//import "./styles.css";
import Main from "./components/main/main";
import Blogs from "./components/blogs/blogs";
import Questions from "./components/questions/questions";
import Support from "./components/support/support";
import Authentication from "./components/authentication/authentication";
import Chat from "./components/chat/chat.jsx";
import css from "./components/main/main.css";
import Map from "./components/maps/map";

export default function App() {
  ///////////////////array route
  const Nav_link_arr = [
    ["Home", "/", <Main />],
    ["Blogs", "/blogs", <Blogs />],
    ["Questions", "/questions", <Questions />],
    ["Support", "/support", <Support />],
    ["Authentication", "/authentication", <Authentication />],
    ["Chat", "/chat", <Chat />],
    ["Map", "/map", <Map />],
    ["Support", "/m", <div>mSupport</div>],
  ];
  ///////////////////add NavLink
  const Nav_link = () => {
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
    return <ol className="NavLink">{Nav_link_list}</ol>;
  };
  /////////////////////add route {/*  <Route path={link[1]} element={link[0]} /> */}
  const Nav_route = () => {
    const Nav_route_list = Nav_link_arr.map((link) => (
      <Route path={link[1]} element={link[2]} />
    ));
    return <Routes>{Nav_route_list}</Routes>;
  };
  /////////////////////
  const Nav_bar = () => {
    const Nav_bar_list = Nav_link_arr.map((link) => (
      <li className="nav-item">
        <NavLink className="nav-link" to={link[1]}>
          {link[0]} {/* <span className="sr-only">(current)</span> */}
        </NavLink>
      </li>
    ));
    return (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">{Nav_bar_list}</ul>
        <span className="navbar-text">Navbar</span>
      </div>
    );
  };
  /////////////////////////
  return (
    <div className="App">
      {/*  <link
        crossorigin
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      /> */}
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Nav_bar />
        </nav>
        {/*  <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/map" element={<Map />} />
        </Routes> */}
        <Nav_route />
        {/*<Nav_link />*/}
      </BrowserRouter>
    </div>
  );
}
