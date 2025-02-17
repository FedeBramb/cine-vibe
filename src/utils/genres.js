// utils/genres.js
const genresMap = {
    28: "Azione",
    12: "Avventura",
    16: "Animazione",
    35: "Comedy",
    80: "Crime",
    99: "Documentario",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "Storico",
    27: "Horror",
    10402: "Musical",
    9648: "Mistero",
    10749: "Romantico",
    878: "Science Fiction",
    10770: "Film Tv",
    53: "Thriller",
    10752: "Guerra",
    37: "Western",
};

export const findGenres = (genre_ids) => {
    if (Array.isArray(genre_ids)) {
        return genre_ids.map(id => genresMap[id] || "Unknown");
    }
    return genresMap[genre_ids] || "Unknown";
};
// export const findGenre = (genre_name) => {
//     return 
// }