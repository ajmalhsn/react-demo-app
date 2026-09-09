export function EventBinding(){

    function handleInsertClick(e){
        console.log(`Button Name : ${e.target.name}\nButton Id:${e.target.id}\nX Position: ${e.clientX}`);
    }

    return(
        <div className="container-fluid p-4">
             <button onClick={handleInsertClick} name="Insert" id="btnInsert">Insert</button>
        </div>
    )
}