import React from "react"
import AdventureUrl from "../assets/adventure.svg"

function Quiz({quiz: {question, flagUrl, flagAlt, responses, answer}, onAnswered}) {
    const letters = ["A", "B", "C", "D"]

    const Response = ({letter, response}) => (
        <div className={"response-container"}>
            <div className={"response-letter"}>
                {letter}
            </div>
            <h3 className={"response"}>{response}</h3>
        </div>
    )

    return (
        <div className={"quiz-container"}>
            <div className={"question-container"}>
                {flagUrl && <div className={"flag-container"}><img src={flagUrl} alt={flagAlt}/></div>}
                <h2 className={"question"}>{question}</h2>
            </div>
            <div className={"adventure-container"}><img src={AdventureUrl}/> </div>
            {responses.map((response, i) => (<Response key={i} response={response} letter={letters[i]}/>))}
        </div>
    )
}

export default Quiz