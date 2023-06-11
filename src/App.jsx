import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

const App = () => {
    return (
        <div className="app">
            <header className="site-header">
                <div className="container container-flex">
                    <div className="logo">
                        <Link to="/">#vanlife</Link>
                    </div>
                    
                    <nav className="site-nav">
                        <Link to="/about">About</Link>
                        <Link to="/vans">Vans</Link>
                    </nav>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
            </Routes>

            <footer className="site-footer">
                <p className="small-copy">&copy; 2022 #VANLIFE</p>
            </footer>
        </div>
    )
}

export default App;