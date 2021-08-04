import Streamer from "../../components/Streamer/Streamer"

export default function StreamerListPage ( {streamers, handleDeleteStreamer, user} ) {
    return (
        <>
			<h1>Streamer List</h1>
			<div>
				{streamers.map(streamer => (
					<Streamer
						user={user}
						streamer={streamer}
						key={streamer._id}
						handleDeleteStreamer={handleDeleteStreamer}
					/>
				))}
			</div>
		</>
    )
}