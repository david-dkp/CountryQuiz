import "./App.css"
import BackgroundUrl from "./assets/background.png"
import {useEffect, useState} from "react";
import {getCountries} from "./apis/countriesApi";
import Results from "./components/Results";
import Quiz from "./components/Quiz";
import {generateQuizzes} from "./utils/quizzesGenerator"

function App() {
    const [countriesStore, setCountriesStore] = useState([])
    const [loading, setLoading] = useState(true)
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
    const [leftQuizzes, setLeftQuizzes] = useState([])
    const [showResult, setShowResults] = useState(false)

    const currentQuiz = leftQuizzes[0]

    const onNextClick = (isAnswerCorrect) => {
        if (isAnswerCorrect) {
            setCorrectAnswersCount(correctAnswersCount + 1)
            setLeftQuizzes(leftQuizzes.slice(1, leftQuizzes.length))
        } else {
            setShowResults(true)
        }
    }

    const onTryAgainClick = () => {
        setCorrectAnswersCount(0)
        setLeftQuizzes(generateQuizzes(countriesStore))
        setShowResults(false)
    }

    useEffect(() => {
        getCountries().then(r => {
            const countries = r.filter(e => e.capital.length > 0)
            setCountriesStore(countries)
            setLeftQuizzes(generateQuizzes(countries))
            setLoading(false)
        })
    }, [])

    return <div className="app" style={{
        backgroundImage: `url(${BackgroundUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
        <main>
            <div className={`app-title-container`}><h1 className={`app-title ${loading ? "loading" : ""}`}>Country
                Quiz</h1>
            </div>
            {loading ? <div className={"quiz-panel loading"}/> : <div className={"quiz-panel"}>
                {!showResult &&
                    <Quiz quiz={currentQuiz} onAnswered={onNextClick}/>}
                <Results style={{display: showResult ? "flex" : "none"}}
                         numberCorrectAnswer={correctAnswersCount}
                         onTryAgainClick={onTryAgainClick}/>
            </div>}
        </main>
        <footer>
            created by <span className={"develop-name"}>David</span> - devChallenges.io
        </footer>
    </div>
}

export default App
