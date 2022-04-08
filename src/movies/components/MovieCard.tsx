import { StarRating, Button } from "shared/components";
import { getAvgRating } from "movies/MovieModel";
import { Movie } from "movies/MovieModel";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
  removeMovie?: any;
  index: number;
}

export const MovieCard = (props:MovieCardProps) => {
  const [count, setcount] = useState(0)

  const { movie, removeMovie, index }  = props
  const movieRating = getAvgRating(movie);

  const handleMovieRating = (rating: number) => {
    movie.ratings.push(rating)
    setcount(count + 1)
  }

  return (
      (
        <div data-testid={`movie-item-${movie.id}`}>
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: "14px" }}>
          {movie.description}
        </p>
        <Button onClick={() => removeMovie(index)}>Delete</Button>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            {/* TODO: Implement rating functionality */}
            <StarRating rating={movieRating} onRate={handleMovieRating} />
          </div>
          <div
            data-testid="movie-rating"
            className="card-footer-badge float-right badge badge-primary badge-pill"
          >
            {movieRating}
          </div>
        </div>
      </div>
    </div>
      )
    )
};
