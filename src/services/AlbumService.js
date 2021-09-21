import http from "./BaseService";

export const getAlbums = () => {
  return http.get("/albums");
};

export const getAlbum = (albumId) => {
  return http.get(`/albums/${albumId}`);
};

export const getAlbumPhotos = (albumId) => {
  return http.get(`/albums/${albumId}/photos`);
};
