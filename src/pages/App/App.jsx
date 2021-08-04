import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as streamersAPI from "../../utilities/streamers-api";
import AuthPage from "../AuthPage/AuthPage";
import NewStreamerPage from "../../components/NewStreamerPage/NewStreamerPage";
import StreamerListPage from "../StreamerListPage/StreamerListPage";
import EditStreamerPage from "../EditStreamerPage/EditStreamerPage";
import StreamerInfoPage from "../StreamerInfoPage/StreamerInfoPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [streamers, setStreamers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getStreamers() {
      const streamers = await streamersAPI.getAll();
      setStreamers(streamers);
    }
    getStreamers();
  }, []);

  useEffect(() => {
    history.push("/streamers");
  }, [streamers, history]);

  async function handleNewStreamer(newStreamerData) {
    const newStreamer = await streamersAPI.create(newStreamerData);
    setStreamers([...streamers, newStreamer]);
  }

  async function handleUpdateStreamer(updatedStreamerData) {
    const updatedStreamer = await streamersAPI.update(updatedStreamerData);
    const newStreamersArray = streamers.map((s) =>
      s._id === updatedStreamer._id ? updatedStreamer : s
    );
    setStreamers(newStreamersArray);
  }

  async function handleDeleteStreamer(id) {
    await streamersAPI.deleteOne(id);
    setStreamers(streamers.filter((streamer) => streamer._id !== id));
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Route exact path="/streamers">
            <StreamerListPage streamers={streamers}
              handleDeleteStreamer={handleDeleteStreamer}
            />
          </Route>
          <Route exact path="/streamers/new">
            <NewStreamerPage
              handleNewStreamer={handleNewStreamer}
            />
          </Route>
          <Route exact path="/streamers/details">
            <StreamerInfoPage streamers={streamers} />
          </Route>
          <Route exact path="/streamers/edit">
            <EditStreamerPage handleUpdateStreamer={handleUpdateStreamer} />
          </Route>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
