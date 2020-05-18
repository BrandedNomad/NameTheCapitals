import React from 'react'
import test from '../utils/test-capitals'

class Test extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            question: test.getQuestion(),
            choices: test.getChoices(),
            image:test.getImage(),
            answer:test.getAnswer(),
            score:[],
            correct:0,
            toggle:false
        }
    }

    handleClick(e){


        let selected = e.target.innerText
        let correctAnswer = test.getAnswer()
        let score;
        let correct;
        if(selected === correctAnswer){
            score = 1
            correct = 1;
        }else{
            score = 0
            correct = 2
        }


        var nextQuestion = test.getNextQuestion()
        if(nextQuestion !== 'complete'){
            var choices = test.getChoices()
            var image = test.getImage()
            var answer = test.getAnswer()

            this.setState(()=>{
                return {
                    correct: correct
                }
            })

            setTimeout(()=>{

                this.setState((prevState)=>{
                    return {
                        question:nextQuestion,
                        choices:choices,
                        image:image,
                        answer:answer,
                        score:prevState.score.concat(score),
                        correct:0

                    }
                })

                console.log(this.state.score)

            },300)

        } else {
            this.setState((prevState)=>{
                return {
                    score:prevState.score.concat(score),
                    correct:correct
                }
            })

            const totalCorrect = this.state.score.reduce((accumulator,currentValue)=>{
                return accumulator + currentValue
            }, 0)

            const totalScore = Math.floor((100 / this.state.score.length) * totalCorrect)

            setTimeout(()=>{
                this.setState(()=>{
                    return {
                        correct:0
                    }
                })
                const dest = '/results/' + totalScore
                window.location.href= dest


            },300)


        }



    }

    handleReset(){
        test.resetPointer()
        this.setState(()=>{
            return{
                question:test.getQuestion(),
                choices:test.getChoices(),
                image:test.getImage(),
                score:[]
            }
        })

    }

    handleToggle(){
        if(this.state.correct === 0){
            return 'choice'
        }else if(this.state.correct === 1){
            return 'choice-correct'
        }else {
            return 'choice-false'
        }
    }

    render(){
        return (
            <div className='test-container'>
                <div className='test-container__display'>
                    <div className='flagbox'>
                        <img className="flagbox__flag" src={this.state.image} />
                    </div>
                    <div className="question">
                        <p className="question__text">{this.state.question}</p>
                    </div>


                    <div className="choices">
                        {this.state.choices.map((choice,index)=>{
                            return <div className={this.handleToggle()}><p
                                key={index + 1}
                                onMouseUp={this.handleClick}
                                className='choice__text'
                            >{choice}</p></div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;