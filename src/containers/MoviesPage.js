// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
// import the `MovieShow` component:
import MovieShow from '../components/MovieShow';

// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from App.js 
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* We also add a `Route` component that will render `MovieShow` 
    when a movie is selected
    Here we replace the `component` prop with the `render` prop so we can pass the 
    route information to the `MovieShow` component
    Adding code to show a message to the user to select a movie if they haven't yet*/}
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>} />
    
    
    <Route path={`${match.url}/:movieId`} render={ routerProps =>
      <MovieShow {...routerProps} movies={movies} /> }
    />
  </div>
)

export default MoviesPage
//freebie on 2/15, 3-day on 2/17 (17,18,19)