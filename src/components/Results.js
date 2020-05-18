import React from 'react';


const Results = (props)=>{
    console.log(props)
    return (
        <div>
            <div className="results-display">
                <p className="results-text">{props.match.params.score}%</p>
                {props.match.params.score < 20 && <img src="/img/stars/no-star.png" width="300"/>}
                {props.match.params.score >= 20 && props.match.params.score < 40 && <img src="/img/stars/one-star.png" width="300"/>}
                {props.match.params.score >= 40 && props.match.params.score < 60 && <img src="/img/stars/two-star.png" width="300"/>}
                {props.match.params.score >= 60 && props.match.params.score < 80 && <img src="/img/stars/three-star.png" width="300"/>}
                {props.match.params.score >= 80 && props.match.params.score < 100 && <img src="/img/stars/four-star.png" width="300"/>}
                {props.match.params.score == 100 && <img src="/img/stars/five-star.png" width="300"/>}
                <div
                    className={"restart__button"}
                    onMouseUp={()=>{
                        window.location.href='/test'

                    }}>
                    <p className='restart-text'>Try Again?</p>
                </div>
            </div>

        </div>
    )
}


export default Results;