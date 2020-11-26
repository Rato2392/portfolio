import React, { useState } from "react";
import ReactPlayer from 'react-player/youtube'
import HomeIcon from "@material-ui/icons/Home";
import { Button,IconButton } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

const Playermusic = () => { 
    
    const [isplaying, setIsPlaying] = useState(true);
    
    const musicClick = () => {
        {isplaying ? (
            setIsPlaying(false)
        ):(
            setIsPlaying(true)
        )
        }
    }
    
    return (
       
        <Button style={{ color: "rgb(0 172 193)",  }} onClick={musicClick} >
            {isplaying ? (
                <MusicNoteIcon />
            ):(
                <MusicOffIcon />
            )}
            <ReactPlayer 
                playing={isplaying}
                loop="true" 
                volume={0.25}
                url='https://www.youtube.com/watch?v=ZEcqHA7dbwM' 
                width="0" 
                height="0"
            />
        </Button>
    )
}

export default Playermusic;