 import { Cookies, useCookies } from "react-cookie";
 import { useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import axios from "axios";
import { Link } from "react-router-dom";


export default function IShopDashboard(){
    let navigate = useNavigate();

    const [cookie, setCookie, removeCookie] = useCookies();
    const [userid, setUserId] = useState();
    const[categories, setCategories] = useState([]);

    function loadCategories(){
        axios.get("http://localhost:5000/getcategories")
        .then(response =>{
            setCategories(response.data);
        })
    }

    useEffect(()=>{
        if(cookie["userid"] == undefined){
            navigate("/login");
        }else{
            setUserId(cookie["userid"]);
            loadCategories();
        }
    })

    function handleSignout(){
        removeCookie("userid");
        navigate("/login");
    }
    return (
        <div>
            <h2>User Dashboard {userid} - <button className="btn btn-link" onClick={handleSignout}>Signout</button></h2>
            <h3>Product Categories</h3>
            <ol>
                {
                    categories.map(item =>
                        <li key={item.category}><Link to={"/products/"+item.category}>{item.category.toUpperCase()}</Link></li>
                    )
                }
            </ol>
        </div>
    )
}