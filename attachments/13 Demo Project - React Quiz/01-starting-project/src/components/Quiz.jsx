import { useCallback, useState } from "react"
import QUESTIONS from '../../../questions.js';
import quizCompletedImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";
export default function Quiz(){

    const [userAnswer,setUserAnswer] = useState([]);
    const userQuestion = userAnswer.length;
    const quizIsComplete = userQuestion===QUESTIONS.length;
    
   const handleAnswer= useCallback(function handleAnswer(selectedAnswer){
        setUserAnswer((prev)=>{
           return [...prev,selectedAnswer]
        })
    },[]);
    const handleSkipAns = useCallback(()=> handleAnswer(null),[handleAnswer]);
    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="Quiz Completed" /> 
            <h2>Quiz is Completed</h2>
            </div>
        )
    }
    const shuffledAnswers = [...QUESTIONS[userQuestion].answers];
    shuffledAnswers.sort(()=> Math.random()-0.5);
    return <div id="quiz">
    <div id="question">
        <QuestionTimer key={userQuestion} timeOut={10000} onTimeout={handleSkipAns}/>
        <h2>{QUESTIONS[userQuestion].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((answer) => (
                <li key={answer} className="answer">
                    <button onClick={()=>handleAnswer(answer)}>{answer}</button>
                </li>
            ))}
        </ul>
    </div>
    </div>
}