export const getYoutubeTrailerUrl = (title) => {
    const encodedTitle = encodeURIComponent(title);
    return `https://www.youtube.com/results?search_query=${encodedTitle}+trailer`;
  };

  export const getYTSUrl = (title) => {
    const encodedTitle = encodeURIComponent(title);
    return  `https://yts.mx/browse-movies/${encodedTitle}/all/all/0/latest/0/all`;
  }