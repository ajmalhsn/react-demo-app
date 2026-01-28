import axios from "axios";
import { use, useEffect, useState } from "react";

export function MouseDemo() {
    const [mobiles, setMobiles] = useState([{image:null}]);
    function LoadMobiles() {
        axios.get("/mobiles.json").then((response) => {
            setMobiles(response.data);
        });
    }
    useEffect(() => {
        LoadMobiles();
    }, []);

  return (
    <div className='container-fluid'>
        <div className='row mt-4'>
            <div className="col-2">
                {mobiles.map((mobile) => (
                <div key={mobile.id}>
                    <img src={mobile.image} alt="mobile" width="100%"/>
                </div>
                ))
            </div>
        </div>
    </div>

  );
}