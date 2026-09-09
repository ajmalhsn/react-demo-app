import { useEffect, useState } from "react";

export function DemoComponent() {
    const [name, setName] = useState(null);

    

    useEffect(()=>{

        
        
        // actions on mount
    },[]);


    return (
        <p>
            {
                name === null ? setName(prompt("Name is Required")) : name
            }
        </p>

    )

    
}