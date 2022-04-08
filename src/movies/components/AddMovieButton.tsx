interface AddMovieButtonProps {
  setShowAddMovieForm?: any;
}

export function AddMovieButton(props: AddMovieButtonProps) {
  const { setShowAddMovieForm } = props;
  return (
    <div
      style={{
        cursor: "pointer",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        textAlign: "center",
      }}
      onClick={() => {
        if (!setShowAddMovieForm) return;
        setShowAddMovieForm();
      }}
    >
      <div style={{ fontSize: "8rem" }}>+</div>
      <div className="button-label" >Add movie</div>
    </div>
  );
}
