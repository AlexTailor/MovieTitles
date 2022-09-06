export default `
query SearchMovies($title: String!) {
    searchMovies(query: $title) {
      id
      name
      score
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      genres {
        id
        name
      }
    }
}
`;
