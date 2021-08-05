import Streamer from "../../components/Streamer/Streamer";

export default function StreamerListPage({ streamers }) {
  return (
    <>
      <h1>Streamer Profiles</h1>
      <div class="container">
        <div class="row row-cols-4">
          <div class="row">
            {streamers.map((streamer) => (
              <Streamer streamer={streamer} key={streamer._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
