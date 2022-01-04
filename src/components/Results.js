import WinnersUrl from "../assets/winners.svg"

function Results({numberCorrectAnswer, onTryAgainClick}) {

    return (
        <div className={"results-container"}>
            <img className={"trophy-image"} src={WinnersUrl} alt={"Trophy"}/>
            <h2 className={"results-title"}>Results</h2>
            <p className={"answer-sentence"}>You got <span className={"correct-answers-number"}>4</span> correct answers</p>
            <button className={"try-again-button"}>Try again</button>
        </div>
    )
}

export default Results