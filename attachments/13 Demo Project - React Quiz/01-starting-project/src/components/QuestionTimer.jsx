import { useEffect, useState } from "react";

export default function QuestionTimer({onTimeout,timeOut}){
    const[remainingTime,setRemainingTime] = useState(timeOut);

    useEffect(()=>{
        console.log("set Timeout");
        const timer = setTimeout(onTimeout,timeOut);
        return ()=>{
            clearInterval(timer);
        }
    },[onTimeout,timeOut]);
    
    useEffect(()=>{
        console.log("set Interval");
        const interval = setInterval(()=>{    
            setRemainingTime((prev)=> prev - 100)
        },100);

        return ()=>{
            clearInterval(interval);
        }
    },[]);
    return <progress id='question-time' max={timeOut} value={remainingTime}/>
}