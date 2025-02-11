import React from 'react';

const MovieTrailer = ({ trailerData }) => {
    if (!trailerData) return <p>Loading...</p>;
  return (
    <div className="flex items-center mb-5">
      <iframe
        width="350"
        height="250"
        src={`https://www.youtube.com/embed/${trailerData}`}
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
