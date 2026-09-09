import { useState, useEffect } from "react";

export function FakeStorePractice() {

    const [products, setProducts] = useState([{id:0, title:null, price:0, description:null, category:null, image:null, rating:{rate:0, count:0}}]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));

        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[]);

    return (
        <div className="container-fluid">
            <header className="d-flex align-align-items-center p-2 justify-content-between bg-light">
                <div>
                <span className="bi bi-bag"></span>
                <button className="btn btn-primary mx-4">Shopping</button>
                </div>
                <div>
                <div className="input-group my-2">
                    <input className="form-control" type="text" placeholder="Search for products, brands and more" />
                    <button className="btn btn-primary">
                        <span className="bi bi-search"></span>
                    </button>
                </div>
                </div>
                <div>
                    <button className="btn bi bi-person"></button>
                    <button className="btn bi bi-heart"></button>
                    <button className="btn bi bi-cart"></button>
                </div>
            </header>
            <section className="row mt-2">
                <nav className="col-2">
                    <div className="bg-light p-3">
                        <div className="d-flex my-3 justify-content-between">
                            <span className="text-primary">Filters</span>
                            <span className="text-primary">Clear All</span>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fw-bold">Category</label>
                            <div>
                                <select className="form-select">
                                    {categories.map(category => (
                                        <option key={category}>{category}</option>
                                    ))} 
                                </select>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fw-bold">Choose Categories</label>
                            <div>
                                <ul className="list-unstyled">
                                    {categories.map(category => (
                                        <li key={category} style={{fontSize:'13px'}} > <input type="checkbox" className="me-2" /> <label>{category.toUpperCase()}</label></li>
                                    ))} 
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="form-label fw-bold">Price Range</label>
                            <input type="range" className="form-range" />
                        </div>
                        <div className="mt-4">
                            <label className="form-label fw-bold">Ratings</label>
                            <ul className="list-unstyled">
                                <li> 4 <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span> </li>
                                <li className="my-2"> 3 <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span>  </li>
                                <li> 2 <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span>  </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="col-10">
                    <div className="row">
                        {products.map(product => (
                            <div key={product.id} className="col-3 mb-4">
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top p-3" alt={product.title} style={{height:'200px', objectFit:'contain'}} />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title">{product.title}</h6>
                                        <p className="card-text text-primary fw-bold">${product.price}</p>
                                        <button className="btn btn-sm btn-primary mt-auto">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </main>
                </section> 
            </div>
    )
}