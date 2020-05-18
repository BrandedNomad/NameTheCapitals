import React from 'react';

const Start = () =>{
    return (
        <div className='start-container'>
            <img className="start-image" src="./img/nightline.png"/>
            <h1 className="start-title">Name The Capital City</h1>
            <div
                className={"start-container__button"}
                onMouseUp={()=>{
                window.location.href='test'
            }}>
                <p className='start-text'>Start</p>
            </div>

        </div>
    )
}

export default Start;