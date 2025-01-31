import { useEffect } from "react";



export default function useSentenceCase(str){
    
    useEffect(()=>{
        var firstChar = str.ChartAt(0);
        var restChar = str.substring(1);
        var sentence = firstChar.toUpperCase() + restChar.toLowerCase();

    }, str);
    return sentence;
}