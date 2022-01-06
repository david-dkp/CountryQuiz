import React, {useState} from "react"
import AdventureUrl from "../assets/adventure.svg"
import {CancelOutlined, CheckCircleOutlined} from "@material-ui/icons";

function Quiz({quiz: {question, flagUrl, flagAlt, responses, answer}, onAnswered}) {
    const letters = ["A", "B", "C", "D"]
    const [response, setResponse] = useState("")
    const responded = response !== ""

    const handleOnResponseClick = (response) => {
        setResponse(response)
    }

    const Response = ({letter, response, state}) => (
        <button onClick={() => handleOnResponseClick(response)}
                disabled={responded}
                className={`response-container ${state}`}>
            <div className={"response-letter"}>
                {letter}
            </div>
            <h3 className={"response"}>{response}</h3>
            {state !== "" && (state === "correct" ? <CheckCircleOutlined className={"state-icon"}/> :
                <CancelOutlined className={"state-icon"}/>)}
        </button>
    )

    const getResponseState = (r) => {
        if (!responded) return ""
        if (response === r) {
            return r === answer ? "correct" : "wrong"
        }
        if (response !== answer && r === answer) {
            return "correct"
        }

        return ""
    }

    const onNextClick = () => {
        onAnswered(response === answer)
        setResponse("")
    }

    return (
        <div className={"quiz-wrapper"}>
            <div className={"quiz-container"}>
                <div className={"question-container"}>
                    {flagUrl &&
                        <div className={"flag-container"}>
                            <img src={flagUrl} alt={flagAlt}/>
                        </div>
                    }
                    <h2 className={"question"}>{question}</h2>
                </div>
                <div className={"adventure-container"}><img src={AdventureUrl}/></div>
                {responses.map((r, i) => (
                    <Response key={i} state={getResponseState(r)} response={r} letter={letters[i]}/>))}
                {responded && <button className={"next-button"} onClick={() => onNextClick()}>Next</button>}
            </div>
        </div>
    )
}

export default Quiz