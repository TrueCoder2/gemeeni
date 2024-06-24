"use client"
import run from "@/geminimodel/gemini";
import React, { useState , createContext } from "react";

export const Context = createContext();
const ContextProvider = ({children}) => {
const [theme , setTheme] = useState("dark");
const [loading , setLoading] = useState(false);
const [result , setResult] = useState([]);
const [displayResult , setDisplayResult] = useState(false)
const [input , setInput] = useState('')
const [recentPrompts , setRecentPrompts] = useState("")
const [prevPrompts , setPrevPrompts] = useState([])

//Streamed text
const StreamText = ( index , newWord) => {
    setTimeout(() => {
        setResult(() => prev + newWord);
    }, 70*index);
};

//On giving prompt 
const submit = async (prompt) => {
    setLoading(true);
    setResult("");
    setDisplayResult(true);
    setRecentPrompts(input);

    if(input && prompt) {
        setPrevPrompts((prev) => [...prev, input] );
    }

    const response = input ? await run(input) : await run(prompt);
    const boldResponse = response.split("**")
    let newArray = "";

    for(let i = 0; i < boldResponse.length; i++){
        if(i===0 || i%2 !==1){
            newArray += boldResponse[i];
        }else{
            newArray += "<br>" + boldResponse + "</br>"
        }
    }

    let newRes = newArray.split("*").join("</br>");
    let newRes2 = newRes.split("");

    for(let i=0; i< newRes2.length; i++){
        const newWord = newRes2[i];
        StreamText(i, newWord + "")
    }

    setLoading(false);
    setInput("")
}

const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
}

const contextValue ={
    theme,
    toggle,
    submit,
    result,displayResult,
    input,setInput,
    recentPrompts ,setRecentPrompts ,
    prevPrompts, setPrevPrompts,
    setDisplayResult,
}

    return(
   <Context.Provider value={contextValue}>
    <div className={theme} > {children} </div>
   </Context.Provider>
    )
}

export default ContextProvider;