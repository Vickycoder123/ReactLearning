import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useReducer, useState } from "react";

var initialState = {likes : 0, dislikes: 0};

function reducer(state, action){
    switch(action.type){
        case 'like':
            return {likes: state.likes+1, dislikes: state.dislikes};
        case 'dislike':
            return {dislikes: state.dislikes+1, likes: state.likes};
    }

}

export default function ReducerDemo(){

    const[state, dispatch] = useReducer(reducer, initialState);

    const[product, setProduct] = useState([{}]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/2")
        .then(response=>response.json())
        .then(data => {
            setProduct(data);
        })
    },[])


    return(
        <div className="container-fluid">
             <h2>Product Details</h2>
             <div className="card p-2" style={{width:'300px'}}>
                <img src={product.image} className="card-img-top" height="160" />
                <div className="card-header">
                    <p>{product.title}</p> 
                </div>
                <div className="card-footer">
                    [{state.likes}] <button  className="btn btn-primary" onClick={()=> {dispatch({type:'like'})}}><span className="bi bi-hand-thumbs-up"></span></button>
                    [{state.dislikes}]<button className="btn btn-danger" onClick={()=> {dispatch({type:'dislike'})}}><span className="bi bi-hand-thumbs-down"></span></button>
                </div>
             </div>
            
        </div>
    )
}