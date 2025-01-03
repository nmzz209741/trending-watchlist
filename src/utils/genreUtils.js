export const mapGenreIdsToNames = (genreIds, genres) => {
  return genreIds
    .map((id) => genres.find((genre) => genre.id === id)?.name)
    .filter((name) => !!name)
    .sort((a, b) => a.localeCompare(b));
};
