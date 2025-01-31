import { useState, useEffect } from "react";



export function useFetchData(url){

    const[date, setData] = useState();

    useEffect(() =>{
        fetch(url)
        .then(response=> response.json())
        .then(data =>{
            setData(data);
        })
        .catch((ex) => {console.log(ex)});
    },[url])

    return {data};
}