import { useLocation } from "react-router-dom";
import StreamerCard from "../../components/StreamerCard/StreamerCard";

export default function StreamerInfoPage() {
    const {
        state: { streamer },
    } = useLocation();
    return (
        <>
            <h1>Stream Info</h1>
            <StreamerCard streamer={streamer} key={streamer._id}/>
        </>
    )    
}