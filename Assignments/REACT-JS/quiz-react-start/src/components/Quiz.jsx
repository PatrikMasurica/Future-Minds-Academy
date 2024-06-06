import Questions from '../assets/js/questions';
import { useState } from 'react';
import quizCompleteScreen from '../assets/quiz-complete.png'
import QuizTimer from './QuizTimer';

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const isQuizComplete = activeQuestionIndex === Questions.length;

    function handleAnswer(selectedAnswer) {
        setUserAnswers(
            (previousAnswer) => {
                return [...previousAnswer, selectedAnswer]
            }
        )
    }

    if (isQuizComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteScreen} alt="Quiz Completed" />
                <h2>Quiz Complete</h2>
            </div>
        )
    }

    const shuffleAnswers = [...Questions[activeQuestionIndex].answers.sort((a, b) => Math.random() - 0.5)];


    return (
        <>
            <main>
                <div id="quiz">
                    <div id="question">
                        <QuizTimer />
                        <h2>{Questions[activeQuestionIndex].text}</h2>
                        <ul id="answers">
                            {
                                shuffleAnswers.map((answer) =>
                                    <li key={answer} className='answer'>
                                        <button onClick={() => handleAnswer(answer)}>{answer}</button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}