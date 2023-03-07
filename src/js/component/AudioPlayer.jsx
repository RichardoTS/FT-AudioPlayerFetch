import React, { useState, useRef } from 'react';
import styles from "./AudioPlayer.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";

const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState([
        { id: 1, category: 'game', name: 'Mario Castle', url: 'files/mario/songs/castle.mp3' },
        { id: 2, category: 'game', name: 'Mario Star', url: 'files/mario/songs/hurry-starman.mp3' },
        { id: 3, category: 'game', name: 'Mario Overworld', url: 'files/mario/songs/overworld.mp3' },
        { id: 4, category: 'game', name: 'SuperMario Stage 1', url: "files/mario/songs/stage1.mp3" },
        { id: 5, category: 'game', name: 'SuperMario Stage 2', url: "files/mario/songs/stage2.mp3" }
    ]);

    const audioRef = useRef();

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    return (

        <div className={styles.audioPlayer}>
            <audio ref={audioRef}></audio>

            <button className={styles.backward}><BsFillArrowLeftCircleFill /></button>

            <button className={styles.playBtn} onClick={togglePlayPause}>
                {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
            </button>

            <button className={styles.foward}><BsFillArrowRightCircleFill /></button>
        </div>



    )
}

export default AudioPlayer