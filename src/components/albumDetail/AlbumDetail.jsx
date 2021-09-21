import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getAlbum, getAlbumPhotos } from "../../services/AlbumService";

const AlbumDetail = () => {
  const { albumId } = useParams();

  const [album, setAlbum] = useState(null);
  const [albumPhotos, setAlbumPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingPhotos, setLoadingPhotos] = useState(true);

  const fetchFn = useCallback(() => {
    setLoading(true);

    getAlbum(albumId).then((album) => setAlbum(album));
    getAlbumPhotos(albumId).then((photos) => setAlbumPhotos(photos));
  }, [albumId]);

  const veryImportantString = `The current album id is ${albumId}`;

  useEffect(() => {
    fetchFn();
  }, [fetchFn]);

  useEffect(() => {
    if (albumPhotos) {
      setLoadingPhotos(false);
    }
  }, [albumPhotos]);

  return (
    <div className="AlbumDetail">
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="AlbumDetail__body">
          <h1>{album.title}</h1>
          <p>super album</p>
          <div className="AlbumDetail__body__photos row row-cols-1 row-cols-md-3 g-4">
            {loadingPhotos ? (
              <p>Loading album photos...</p>
            ) : albumPhotos && albumPhotos.length > 0 ? (
              albumPhotos.map((photo) => (
                <div className="col" key={photo.id}>
                  <div className="card h-100">
                    <img
                      src={photo.thumbnailUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{photo.title}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>There are not photos</p>
            )}
          </div>
        </div>
      )}

      <Link
        to={`/albums/${Number(albumId) - 1}`}
        className="btn btn-outline-primary"
      >
        Previous Album
      </Link>
      <Link
        to={`/albums/${Number(albumId) + 1}`}
        className="btn btn-outline-primary"
      >
        Next Album
      </Link>
    </div>
  );
};

export default AlbumDetail;
