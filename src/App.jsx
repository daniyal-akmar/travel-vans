import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import VansTab from "./pages/host/HostVans";
import Reviews from "./pages/host/Reviews";
import HostVanDetailLayout from "./pages/host/HostVanDetailLayout";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />                       
                        <Route path="vans" element={<Outlet />}>
                            <Route index element={<VansTab />} />
                            <Route path=":id" element={<HostVanDetailLayout />}>
                                <Route index element={<HostVanDetail />} />
                                <Route path="pricing" element={<HostVanPricing />} />
                                <Route path="photos" element={<HostVanPhotos />} />
                            </Route>
                        </Route>                        
                        <Route path="reviews" element={<Reviews />} />                    
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App;