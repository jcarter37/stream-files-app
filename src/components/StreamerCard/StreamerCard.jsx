import { Link } from "react-router-dom";

export default function StreamerCard({ streamer }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{streamer.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Name</dt>
          <dd>{streamer.name}</dd>
          <dt>Age</dt>
          <dd>{streamer.age}</dd>
          <dt>Content/Category</dt>
          <dd>{streamer.content}</dd>
          <dt>Platform</dt>
          <dd>{streamer.platform}</dd>
          <dt>Profile Pic</dt>
          <dd>{streamer.profileImg}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/streamers">RETURN TO LIST</Link>
      </div>
    </div>
  );
}
