import { useEffect, useState } from "react"

export function DataBinding2(){

    const [product] = useState({id:1, name:'TV', price:45000, cities:['Delhi','Hyd'], rating:{rate:4.3, count:6000}});    

     const [products] = useState(
        [
            {Id:1, Name: "TV", Price: 450000},
            {Id:2, Name: "Mobile", Price: 120000},
            {Id:3, Name: "Watch", Price: 30000}
        ]
    );

    useEffect(()=>{

    },[])


    return(
        <div>
        <div className="container-fluid">
           <h4>Product Details</h4>
           <dl className="ms-4">
            <dt>Product Id</dt>
            <dd>{product.id}</dd>
            <dt>Name</dt>
            <dd>{product.name}</dd>
            <dt>Price</dt>
            <dd>{product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}</dd>
            <dt>Shipped To</dt>
            <dd>
                <ol>
                    {
                        product.cities.map(city=> <li key={city}>{city}</li>)
                    }
                </ol>
            </dd>
            <dt>Ratings</dt>
            <dd>
                 {product.rating.rate} <span className="bi bi-star-fill text-success"></span>
                 [{product.rating.count}]
            </dd>
           </dl>
        </div>
        <div className="container-fluid">
            <h4>Product List</h4>
            <table className="table table-hover table-striped w-50">
                <thead>
                    <tr>
                        <th className="bi-sort-alpha-down">Id</th>
                        <th className="bi-sort-alpha-down">Name</th>
                        <th className="bi-sort-alpha-down">Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(prod=> 
                            <tr key={prod.Id}>
                                <td>{prod.Id}</td>
                                <td>{prod.Name}</td>
                                <td>{prod.Price.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
                                <td><button className="btn btn-danger bi-trash"></button>
                                <button className="btn btn-warning bi-pencil mx-2"></button></td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
        
    )
}
