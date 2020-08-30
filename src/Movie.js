import React from "react";
import ProtoTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}</p>
      </div>
    </div>
  );
}

Movie.protoTypes = {
  id: ProtoTypes.number.isRequired,
  year: ProtoTypes.number,
  title: ProtoTypes.string.isRequired,
  summary: ProtoTypes.string.isRequired,
  poster: ProtoTypes.string.isRequired,
  genre: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
};

export default Movie;
