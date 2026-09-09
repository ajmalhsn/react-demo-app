export function RoutingIndex() {
    return (
        <div>
            <Routes>
                <nav>
                    <Link><Route path="/" element={<Index/>}></Route> Home</Link>
                    <Link><Route path="/about" element={<About/>}></Route> Home</Link>
                    <Link><Route path="/home" element={<Login/>}></Route> Home</Link>
                </nav>
            </Routes>
            <section>
                <Outlet/>
            </section>
        </div>
    )
}