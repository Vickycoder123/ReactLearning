import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IShopHome from "./IShopHome";
import IShopDashboard from "./IShopDashboard";
import IShopLogin from "./IShopLogin";
import IShopRegister from "./IShopRegister";
import IShopProducts from "./IShopProducts";
import { IShopProductDetails } from "./IShopProductDetails";

export default function IShopIndex(){
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 m-2">
                <h1>IShop-Online Store</h1>
            </header>

            <section className="mt-2 row">
               <BrowserRouter>
               <nav className="col-3">
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/home">Home</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/register">Register</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/login">Login</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="dashboard">Dashboard</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="/" element={<IShopHome />} />
                        <Route path="home" element={<IShopHome />} />
                        <Route path="login" element={<IShopLogin />} />
                        <Route path="register" element={<IShopRegister />} />
                        <Route path="dashboard" element={<IShopDashboard />} />
                        <Route path="products/:category" element={<IShopProducts />} />
                        <Route path="details/:id" element={<IShopProductDetails />} />

                        <Route path="errorpage" element={
                            <div>
                                <h2 className="text-danger">Invalid Credentials</h2>
                                <Link to="/login">Try Again</Link>
                            </div>
                        } />
                    </Routes>
                </main>
               </BrowserRouter>

            </section>
        </div>
    )
}