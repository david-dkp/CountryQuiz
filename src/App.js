import "./App.css"
import BackgroundUrl from "./assets/background.png"
import Quiz from "./components/Quiz";

function App() {
    return <div className="app" style={{
        backgroundImage: `url(${BackgroundUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
        <main>
            <h1 className={"app-title"}>Country Quiz</h1>
            <div className={"quiz-panel"}>
                <Quiz quiz={{
                    flagAlt: "lol",
                    question: "Which country does this flag belong to?",
                    responses: ["Vietnam", "Finland", "Sweden", "Austria"],
                    answer: "Finland"
                }} />
            </div>
        </main>
        <footer>
            created by <span className={"develop-name"}>David</span> - devChallenges.io
        </footer>
    </div>
}

export default App
