import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { getAlbums } from "../../services/AlbumService";

const AlbumList = () => {
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    getAlbums().then((response) => {
      setAlbums(response);
    });
  }, []);

  useEffect(() => {
    if (albums) {
      setLoading(false);
    }
  }, [albums]);

  return (
    <div className="AlbumList row row-cols-1 row-cols-md-2 g-4">
      {loading ? (
        <p>Loading albums...</p>
      ) : albums && albums.length > 0 ? (
        albums.map((album) => (
          <div className="col" key={album.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <Link
                  className="btn btn-outline-primary"
                  to={`/albums/${album.id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>There are not albums</p>
      )}
    </div>
  );
};

export default AlbumList;
