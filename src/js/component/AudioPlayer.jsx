import React, { useState, useRef, useEffect } from 'react';
import styles from "./AudioPlayer.module.css";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState([]);
    const [volume, setVolume] = useState(60);

    let audioRef = useRef();

    const [playing, setPlaying] = useState(null);

    const playList = isPlaying.map((trk, i) => {
        const url = trk.url
        return <li key={i}><button className={styles.lista} onClick={() => { audioRef.src = "https://assets.breatheco.de/apis/sound/" + url; setPlaying(i) }}>{trk.name}</button></li>
    })

    const getSounds = () => {
        fetch("https://assets.breatheco.de/apis/sound/songs")
            .then((response) => response.json())
            .then((data) => {
                setIsPlaying(data);
            });
    }

    useEffect(() => {
        getSounds();

        if (audioRef) {
            audioRef.volume = volume / 100;
        }
    }, [volume, audioRef]);

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
        if (playing === null || playing === 0) {
            audioRef.src = "https://assets.breatheco.de/apis/sound/" + isPlaying[isPlaying.length - 1].url;
            setPlaying(isPlaying.length - 1);
            playAudio();
            return;
        } else {
            audioRef.src = "https://assets.breatheco.de/apis/sound/" + isPlaying[playing - 1].url;
            playAudio();
            setPlaying(playing - 1);
        }
    }

    return (
        <>
            <ol>
                <span onClick={playAudio}>{playList}</span>
            </ol>

            <div>
                <input className={styles.barProg} type="range" min={0} max={100} onChange={(e) => setVolume(e.target.value)} />
            </div>

            <div className={styles.mdPlyr}>
                <audio ref={elem => audioRef = elem}></audio>

                <div className={styles.audioPlayer}>
                    <button className={styles.backward} onClick={previousSong}><BsFillArrowLeftCircleFill /></button>

                    <button className={styles.playBtn} onClick={playAudio}>
                        {icon}
                    </button>

                    <button className={styles.foward} onClick={nextSong}><BsFillArrowRightCircleFill /></button>
                </div>
            </div>
        </>
    )
}

export default AudioPlayer