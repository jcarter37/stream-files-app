import StreamerList from "../../components/StreamerList/StreamerList"

export default function StreamerListPage ( {streamers, handleDeleteStreamer} ) {
    return (
        <>
			<h1>Streamer List</h1>
			<div>
				{streamers.map(streamer => (
					<StreamerList
						streamer={streamer}
						key={streamer._id}
						handleDeleteStreamer={handleDeleteStreamer}
					/>
				))}
			</div>
		</>
    )
}