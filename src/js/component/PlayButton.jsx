import React from 'react';
import { useEffect, useState } from "react"
import buttonStyle from './PlayButton.css';

const PlayButton = () => {

    const [pause, setPause] = useState("");

    return (
        <>
            $(document).ready(function() {
            var btn = $(".button");
            btn.click(function() {
                btn.toggleClass("paused");
            return false;

            <button onClick={() => setPause("Luis")}>Luis</button>

  });
});

        </>
    )
}

export default PlayButton