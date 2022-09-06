import React from "react";

export default function WikiModal(props) {
  const isMobile = navigator.userAgentData.mobile;
  const wikiUrl = isMobile
    ? props.searchResult.content_urls.mobile.page
    : props.searchResult.content_urls.desktop.page;
  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.searchResult.title}</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => props.setSearchResult("")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{props.searchResult.extract}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.open(wikiUrl)}
            >
              Open Wikipedia
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                window.open(`https://www.themoviedb.org/movie/${props.movieId}`)
              }
            >
              Open TMDB
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => props.setSearchResult("")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
