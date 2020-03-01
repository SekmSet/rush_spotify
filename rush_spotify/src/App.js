import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Homes from "./pages/Homes";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";
import Artists from "./pages/Artists";
import Tracks from "./pages/Tracks";
import Searchs from "./pages/Searchs";
import ArtistDetails from "./pages/ArtistDetails";
import AlbumDetails from "./pages/AlbumDetails";
import GenreDetails from "./pages/GenreDetails";

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
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/albums/:id">
              <AlbumDetails />
            </Route>
            <Route path="/albums">
              <Albums />
            </Route>
            <Route path="/genres/:id">
              <GenreDetails />
            </Route>
            <Route path="/genres">
              <Genres />
            </Route>
            <Route path="/artists/:id">
              <ArtistDetails />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/tracks">
              <Tracks />
            </Route>
            <Route path="/search">
              <Searchs />
            </Route>
            <Route exact path="/">
              <Homes />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
