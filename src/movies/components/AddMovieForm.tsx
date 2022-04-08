import { useState } from "react";
import { InputField, Button } from "shared/components";
import { Movie, newMovieId } from "movies/MovieModel";

interface AddMovieFormProps {
  setShowAddMovieForm?: any;
  addMovie?: any;
}

export function AddMovieForm(props: AddMovieFormProps) {
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { setShowAddMovieForm, addMovie } = props;

  const handleUrl = (value: React.SetStateAction<string>) => setUrl(value);
  const handleTitle = (value: React.SetStateAction<string>) => setTitle(value);
  const handleSubTitle = (value: React.SetStateAction<string>) =>
    setSubTitle(value);
  const handleDescription = (value: React.SetStateAction<string>) =>
    setDescription(value);

  const createMovie = () => { 
    const movie:Movie = {
      id: newMovieId(),
      title,
      subtitle: subTitle,
      description,
      imageUrl: url,
      ratings: [0]
    }
    addMovie(movie);
  }

  return (
    <form className="p-4 ">
      <InputField name="Url" value={url} setter={handleUrl} />
      <InputField name="Title" value={title} setter={handleTitle} />
      <InputField name="Subtitle" value={subTitle} setter={handleSubTitle} />
      <InputField
        name="Description"
        value={description}
        setter={handleDescription}
      />
      <div className="text-center">
        {/* TODO: Implement form submission */}
        <Button
          onClick={() => {
            if (!setShowAddMovieForm) return;
            createMovie();
            setShowAddMovieForm();
          }}
        >
          Submit
        </Button>
        <Button
          onClick={() => {
            if (!setShowAddMovieForm) return;
            setShowAddMovieForm();
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
