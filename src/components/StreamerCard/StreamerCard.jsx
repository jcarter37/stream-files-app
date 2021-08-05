import { Link } from "react-router-dom";

export default function StreamerCard({ streamer, user, handleDeleteStreamer }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{streamer.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dd>
            <img src={streamer.profileImg} />
          </dd>
          <dt>Name</dt>
          <dd>{streamer.name}</dd>
          <dt>Age</dt>
          <dd>{streamer.age}</dd>
          <dt>Content/Category</dt>
          <dd>{streamer.content}</dd>
          <dt>Platform</dt>
          <dd>{streamer.platform}</dd>
          {streamer.user === user._id ? (
            <>
              <Link
                className="btn btn-xs btn-warning"
                to={{
                  pathname: "/streamers/edit",
                  state: { streamer },
                }}
              >
                EDIT
              </Link>
              <button
                className="btn btn-xs btn-danger margin-left-10"
                onClick={() => handleDeleteStreamer(streamer._id)}
              >
                DELETE
              </button>
            </>
          ) : (
            " "
          )}
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/streamers">RETURN TO LIST</Link>
      </div>
    </div>
  );
}
