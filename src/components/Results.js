import WinnersUrl from "../assets/winners.svg"

function Results({numberCorrectAnswer, onTryAgainClick, ...props}) {

    return (
        <div className={"results-container"} {...props}>
            <img loading={"eager"} className={"trophy-image"} src={WinnersUrl} alt={"Trophy"}/>
            <h2 className={"results-title"}>Results</h2>
            <p className={"answer-sentence"}>You got <span className={"correct-answers-number"}>{numberCorrectAnswer}</span> correct answers</p>
            <button onClick={onTryAgainClick} className={"try-again-button"}>Try again</button>
        </div>
    )
}

export default Results