import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";
import Artists from "./pages/Artists";
import Tracks from "./pages/Tracks";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/albums">Album</Link>
              </li>
              <li>
                <Link to="/genres">Genre</Link>
              </li>
              <li>
                <Link to="/artists">Artists</Link>
              </li>
              <li>
                <Link to="/tracks">Tracks</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/albums">
              <Albums />
            </Route>
            <Route path="/genres">
              <Genres />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/tracks">
              <Tracks />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
