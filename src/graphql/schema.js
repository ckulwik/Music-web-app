export const GET_SONGS = `
  query GetSongs($category: String) {
    songs(category: $category) {
      id
      title
      soundcloudUrl
      category
      hoverSpeed
      color
    }
  }
`;
