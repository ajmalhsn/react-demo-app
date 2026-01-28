import { useEffect, useState } from "react"

export function ThrottleDemo(){
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    function LoadTime() {
        setDate(new Date().toLocaleTimeString());
    }
    useEffect(()=>{
        setTimeout(LoadTime, 1000);
        //return ()=> clearInterval(interval);
    }
    ,[]);

    return(
        <div className="container-fluid text-center">
            <h3>{date}</h3>
        </div>
    )
}