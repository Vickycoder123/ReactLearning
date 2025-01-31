 import { Cookies, useCookies } from "react-cookie";
 import { useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";


export default function IShopDashboard(){
    let navigate = useNavigate();

    const [cookie, setCookie, removeCookie] = useCookies();
    const [userid, setUserId] = useState();

    useEffect(()=>{
        if(cookie["userid"] == undefined){
            navigate("/login");
        }else{
            setUserId(cookie["userid"]);
        }
    })

    function handleSignout(){
        removeCookie("userid");
        navigate("/login");
    }
    return (
        <div>
            <h2>User Dashboard {userid} - <button className="btn btn-link" onClick={handleSignout}>Signout</button></h2>
        </div>
    )
}