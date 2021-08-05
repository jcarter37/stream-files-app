import { Link } from 'react-router-dom';
export default function StreamerList ( {streamer} ) {
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
        </div>
    </div>
    )
}