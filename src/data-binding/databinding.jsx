import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export function DataBinding(){

    
    const [menuItems] = useState(['Home', 'Sale', 'Shop', 'Contact', 'Services']);

    useEffect(()=>{

    },[])


    return(
        <div className="container-fluid">
          <header className="p-2 mt-2 align-items-center bg-dark d-flex justify-content-between text-white">
                <div>
                  <span className="bi bi-justify"></span>
                  <span className="mx-2">Flipkart</span>
                </div>
                <div>
                  <div className="input-group">
                     <input type="text" className="form-control" placeholder="search flipkart" />
                      <button className="btn btn-warning bi bi-search"></button>
                    </div>
                  </div>
                  <nav>
                    {
                      menuItems.map(item=> <span className="mx-3" key={item}>{item}</span>)
                    }
                  </nav>
            </header>
           <header className="p-2 mt-2 align-items-center bg-light d-md-flex justify-content-between">
               <div>
                <span className="bi bi-justify"></span>
               <span className="mx-2">Amazon</span>
               </div>
               <div>
                 <div className="input-group">
                    <input type="text" className="form-control" placeholder="search amazon" />
                    <button className="btn btn-warning bi bi-search"></button>
                 </div>
               </div>
               <nav>
                 {
                    menuItems.map(item=> <span className="mx-4" key={item}>{item}</span>)
                 }
               </nav>
           </header>
           <section className="mt-3">
               <ul className="list-group w-25">
                 {
                    menuItems.map(item => <li className="list-group-item list-group-item-danger" key={item}>{item}</li>)
                 }
               </ul>
               <ul className="list-unstyled ">
                  {
                     menuItems.map(item=><li key={item}> <input type="checkbox" /> <label className="mt-3">{item}</label> </li>)
                  }
               </ul>
           </section>
        </div>
    )
}