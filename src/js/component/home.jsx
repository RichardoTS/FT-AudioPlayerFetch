import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';


const Home = () => {
    return(
        <div className="container">
            <div className="APlayer shadow">
                <AudioPlayer />
            </div>
        </div>
    )         
}

export default Home;