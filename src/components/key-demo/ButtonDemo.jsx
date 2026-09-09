export function ButtonDemo(){

    function handleDoubleClick(){
        window.open('images/iphone-1.png','iPhone','width:=300 height=400');
    }

    function handleContextMenu(){
        document.oncontextmenu = ()=>{
            alert('Right Click Not Allowed');
            return false;
        }
    }

    

    return(
        <div onContextMenu={handleContextMenu} className="container-fluid p-4">
             <h1>Highly Confidential</h1>
             <p>Right click not allowed on this page</p>
             <img onDoubleClick={handleDoubleClick} src="images/iphone-1.png" width="50" height="50" />
             <p>Double Click to View Large</p>

        </div>
    )
}