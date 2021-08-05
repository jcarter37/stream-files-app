import { Link } from "react-router-dom";

export default function StreamerList({ streamer }) {
  return (
    <div className="container">
  <div className="row row-cols-4">
    <div className="col"><div className="card" style={{ width: "18rem" }}>
      <img src={streamer.profileImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{streamer.name}</h3>
        <p class="card-text">{streamer.bio}</p>
      </div>
      <div className="panel-footer StreamerList-action-panel">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/streamers/details",
            state: { streamer },
          }}
        >
          DETAILS
        </Link>
      </div>
    </div>
    </div>
  </div>
</div>
  );
}

