import { Link } from 'react-router-dom';
export default function StreamerList ( {streamer, handleDeleteStreamer, user} ) {
    return (
        <div className='panel panel-default'>
        <div className='panel-heading'>
            <h3 className='panel-title'>{streamer.name}</h3>
        </div>
        <div className='panel-footer StreamerList-action-panel'>
            <Link
                className='btn btn-xs btn-info'
                to={{
                    pathname: '/streamers/details',
                    state: { streamer },
                }}
            >
                DETAILS
            </Link>
            {
                streamer.user === user._id &&
                <>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/streamers/edit',
                        state: { streamer },
                    }}
                >
                    EDIT
                </Link>
            <button
                className='btn btn-xs btn-danger margin-left-10'
                onClick={() => handleDeleteStreamer(streamer._id)}
            >
                DELETE
            </button>
                </>
               
            }
        </div>
    </div>
    )
}