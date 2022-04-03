import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { getInitialMovies } from "data/initial";
import { Movie } from "movies/MovieModel";

const movies: Movie[] = getInitialMovies();

export const MovieList = () => {

  const removeMovie = (index: number) => {
    movies.splice(index);
    console.log("Delete Movie", movies)
  }

  return (
    <div className="card-deck">
      {movies.map((movie, index) => (
        <Card>
          <MovieCard movie={movie} removeMovie={removeMovie} index={index}/>
        </Card>
      ))}
      {/* TODO: implement a toggle - show either a button or (after clicked) the form */}
      <Card>
        <AddMovieButton />
      </Card>
      <Card>
        <AddMovieForm />
      </Card>
    </div>
  );
};
