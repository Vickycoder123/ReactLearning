import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Electronics from './Electronics';
import Fashion from './Fashion';
import Footware from './Footware';
import ShoppingComponent from "./ShoppingComponent";

export default function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <Router>
                <ul>
                    <li><Link to="/electronics" >Electronics</Link></li>
                    <li><Link to="/footwear" >Footwear</Link></li>
                    <li><Link to="/fashion" >Fashion</Link></li>
                    <li><Link to="/shopping" >Shopping Home</Link></li>

                </ul>
                <hr/>
                <Routes>
                    <Route path="/electronics" element={<Electronics/>}></Route>
                    <Route path="/footwear" element={<Footware/>}></Route>
                    <Route path="/fashion" element={<Fashion/>}></Route>
                    <Route path="/shopping" element={<ShoppingComponent/>}></Route>

                </Routes>
            </Router>
        </div>
    )
}