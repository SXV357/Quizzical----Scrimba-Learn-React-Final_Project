import React from 'react';
import Confetti from 'react-confetti';

export default function LoadingPage(props)
{
    return(
        <div className='intro-page'>
            <Confetti />
            <div className = "intro-page-content">
        <h1 className='intro-page-title'>Quizzical</h1>
        <div className = "intro-page-description">{`On your last attempt, you took ${props.timeTaken} seconds to finish all 10 questions. Do you think you can beat it?`}</div>
        <button className='intro-page-button' onClick={props.begin}>Start Quiz</button>
        </div>
        <img className = "yellow-blob" src = "./Loading page images/yellow-blob.png"></img>
        <img className = "blue-blob" src = "./Loading page images/light-blue blob.png"></img>
            </div>
    )
}