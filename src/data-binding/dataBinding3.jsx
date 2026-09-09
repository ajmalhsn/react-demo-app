import { useEffect, useState } from "react"
import moment from "moment";

export function DataBinding3(){

    const [departure] = useState(new Date());
   // const [weekdays] = useState(['Sunday','Monday','Tuesday','Wed','Thu','Friday','Saturday']);
   // const [months] = useState(['January', 'February', 'March']);

    useEffect(()=>{

    },[])


    return(
        <div className="container-fluid">
            <h3>{moment(departure).format('dddd  MMMM DD, YYYY HH:MM:SS')} </h3>
        </div>
    )
}