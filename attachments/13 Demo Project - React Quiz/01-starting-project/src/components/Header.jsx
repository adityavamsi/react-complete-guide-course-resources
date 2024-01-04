import Img from '../assets/quiz-logo.png';

export default function Header(){
    return <>
        <header>
            <img src={Img} alt="" />
            <h1>REACT QUIZ</h1>
        </header>
    </>
}