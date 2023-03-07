import React, { useRef, useState } from 'react';
import AudioPlayer from './AudioPlayer.jsx';

const Home = () => {
    return(
        <div className="container">
            <div className="APlayer">
                <AudioPlayer />
            </div>
        </div>
    )         
}

export default Home;