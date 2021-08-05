import Streamer from "../../components/Streamer/Streamer"

export default function StreamerListPage ( {streamers} ) {
    return (
        <>
			<h1>Streamer List</h1>
			<div>
				{streamers.map(streamer => (
					<Streamer
						streamer={streamer}
						key={streamer._id}
					/>
				))}
			</div>
		</>
    )
}