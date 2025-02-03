import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



export function IShopProductDetails(){

    const [product, setProduct] = useState([]);
    let parmas = useParams();
    let id = parseInt(parmas.id);

    useEffect(()=>{
        
        axios.get(`http://127.0.0.1:5000/getproduct/${id}`)
        .then(response =>{
            
            setProduct(response.data);
        })
    },[])

    return(
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product[0]?.title}</dd>
                <dt>Price</dt>
                <dd>{product[0]?.price}</dd>
                <dt>Preview</dt>
                <dd>
                    <img src={product[0]?.image} width="100" height="100" />
                </dd>
                <dt>Rating</dt>
                <dd>{product[0]?.rating.rate}</dd>
            </dl>
            <br />
            <Link  to={"/products/" + product[0]?.category}>Back to products</Link>
        </div>
    )
}