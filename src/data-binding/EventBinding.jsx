 import { useState } from "react"

export function EventBinding(){

    const [userName, setUserName] = useState('John');

    function handleNameChange(e, name){
        //e.preventDefault();
        setUserName(e.target.value);
        console.log(name);
    }

    return(
        <div className="container-fluid p-4">
             <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={(e) => handleNameChange(e,userName)} value={userName} /></dd>
             </dl>
             <h2>Hello ! {userName.toLocaleUpperCase()}</h2>
        </div>
    )
}