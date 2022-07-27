import React from 'react'
import he from 'he'

export default function QuizQuestions(props)
{
    const styles = (answer_choice, index) => {
        return (props.checkAnswers ? 
            (props.question.correct_answer === answer_choice ? 
                {backgroundColor: "#94D7A2", color: "#293264"} : 
                (props.question.chosen_answer === index 
                    ? {backgroundColor: "#F8BCBC", color: "#293264"} : 
                    {backgroundColor: "#F5F7FB"})) : 
                    (props.question.chosen_answer === index ? 
                        {backgroundColor: "#D6DBF5"} : {backgroundColor: "#F5F7FB"}))
    }
    
    const answer_choices = props.question.answers.map((answer,index) => (
        <button
        style={styles(answer,index)}
        onClick={(event) => props.pick(event, props.id, index)}
        key = {index}
        id = {index}
        check={props.checkAnswers}
        className = "answer-choice">{he.decode(answer)}</button>
    ))
        
    return(
    <div className='question-and-answer-container' >
        <h2 className='quiz-question'>{he.decode(props.question.question)}</h2>
        <div className='answers'>{answer_choices}</div>
    </div>
    
    )
}