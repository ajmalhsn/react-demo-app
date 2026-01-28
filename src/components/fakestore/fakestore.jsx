export function fakeStore() {

    return (
        <div className="container-fluid">
           <header>
                <div>
                    <span className="bi bi-bag"></span>
                    <button className="btn btn-primary mx-4">Shopping</button>
                </div>

                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for products, brands and more" />
                    <button className="btn btn-primary">
                        <span className="bi bi-search"></span>
                    </button>
                </div>
           </header>
           </div>
    );
}