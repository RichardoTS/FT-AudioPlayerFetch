import React, { useState, useRef, useEffect } from 'react';
import styles from "./AudioPlayer.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";

const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState([
        { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
        { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
        { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" },
        { "id": 4, "category": "game", "name": "SuperMario Stage 1", "url": "files/mario/songs/stage1.mp3" },
        { "id": 5, "category": "game", "name": "SuperMario Stage 2", "url": "files/mario/songs/stage2.mp3" }
    ]);

    let audioRef = useRef();

    const [playing, setPlaying] = useState(null);

    const playList = isPlaying.map((trk, i) => {
        const url = trk.url
        return <li key={i}><button className={styles.lista}onClick={() => { audioRef.src = "https://assets.breatheco.de/apis/sound/" + url; setPlaying(i) }}>{trk.name}</button></li>
    })

    useEffect(() => {
        console.log(audioRef)
    })

    const [icon, setIcon] = useState(<AiFillPlayCircle />)

    function playAudio() {
        if (audioRef.paused) {
            audioRef.play();
            setIcon(<AiFillPauseCircle />);
        } else {
            audioRef.pause();
            setIcon(<AiFillPlayCircle />);
        }
    }

    function nextSong() {
        if (playing === null || playing === isPlaying.length - 1) {
            audioRef.src = "https://assets.breatheco.de/apis/sound/" + isPlaying[0].url;
            setPlaying(0)
            playAudio();
            return;
        } else {
            audioRef.src = "https://assets.breatheco.de/apis/sound/" + isPlaying[playing + 1].url;
            playAudio()
            setPlaying(playing + 1);
        }
    }

    function previousSong() {
        if (playing === null || playing === isPlaying.length - 1) {
            audioRef.src = "https://assets.breatheco.de/apis/sound/" + isPlaying[isPlaying.length - 1].url;
            setPlaying(0);
            playAudio();
            return;
        } else {
            audioRef.src = "https://assets.breatheco.de/apis/sound/" + isPlaying[playing + 1].url;
            playAudio();
            setPlaying(playing + 1);
        }
    }

    return (
        <>
            <div>
                <ol>
                    {playList}
                </ol>
                <div >
                    <audio ref={t => audioRef = t}></audio>
                    <div className={styles.audioPlayer}>
                        <button className={styles.backward} onClick={previousSong}><BsFillArrowLeftCircleFill /></button>

                        <button className={styles.playBtn} onClick={playAudio}>
                            {icon}
                        </button>

                        <button className={styles.foward} onClick={nextSong}><BsFillArrowRightCircleFill /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AudioPlayer