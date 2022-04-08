import { useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { getInitialMovies } from "data/initial";
import { Movie } from "movies/MovieModel";


export const MovieList = () => {
  const [showAddMovieForm, setShowAddMovieForm] = useState<boolean>(false)
  const [count, setCount] = useState(0)

  const movies = useRef(getInitialMovies())

  const removeMovie = (index: number) => {
    movies.current.splice(index, 1)
    setCount(count + 1)
  }

  const addMovie = (movie: Movie) => {
    movies.current.push(movie)
    setCount(count + 1)
  }

  const handleShowAddMovieForm = (value: React.SetStateAction<boolean>) => {
    setShowAddMovieForm(value)
  }

  return (
    <div className="card-deck">
      {movies.current.map((movie, index) => (
        <Card key={index}>
          <MovieCard movie={movie} removeMovie={removeMovie} index={index}/>
        </Card>
      ))}
      {
        !showAddMovieForm ?
        (
          <Card>
            <AddMovieButton setShowAddMovieForm={() => handleShowAddMovieForm(true)}/>
          </Card>
        )
        :
        (
          <Card>
            <AddMovieForm setShowAddMovieForm={() => handleShowAddMovieForm(false)} addMovie={addMovie}/>
          </Card>
        )
      }
    </div>
  );
};
