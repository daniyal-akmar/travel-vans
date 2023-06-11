import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <>
            <header className="site-header">
                <div className="container container-flex">
                    <div className="logo">
                        <Link to="/">#vanlife</Link>
                    </div>
                    
                    <nav className="site-nav">
                        <Link to="/about">About</Link>
                        <Link to="/about">Vans</Link>
                    </nav>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <footer className="site-footer">
                <p className="small-copy">&copy; 2022 #VANLIFE</p>
            </footer>
        </>
    )
}

export default App;