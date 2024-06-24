"use client"

import { CircleUserRound, Compass, Lightbulb, SquarePen, Code, Mic, ImagePlus } from "lucide-react";
import {Context} from '../contextApi/ContextProvider'
import { useContext } from "react";

const BodyContent = () => {
  const {submit ,loading,result ,input, setInput , recentPrompts , displayResult } = useContext(Context);
    return(
       <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
        <div className="flex justify-between items-center text-xl p-5 text-gray-400">
          <p>Gemini</p>
          <CircleUserRound size={36} className="text-softTextColor" />
        </div>

        <div className="m-auto max-w-[900px] ">
        
        {!displayResult ? (
         <>
          <div className="p-5 font-medium my-10 text-5xl">
          <p>
            <span className="bg-gradient-to-r from-blue-600 to-red-500  bg-clip-text text-5xl font-semibold text-transparent">
              Hello, Abhishek
            </span>
          </p>
          <p className="py-2">How can I help you today?</p>
         </div>

         <div className="grid grid-cols-4 gap-5 p-5">
          <div className="p-2 h-48 rounded-xl relative cursor-pointer bg-bgSecondaryColor text-gray-200">
            <p>Walk me through how to apply for a new role</p>
            <Compass 
            size={36}
            className="absolute p-1 right-2 bottom-2 rounded-full bg-bgPrimaryColor text-gray-200"
            />
          </div>

          <div className="p-2 h-48 rounded-xl relative cursor-pointer bg-bgSecondaryColor text-gray-200">
            <p>Help me compare these college majors</p>
            <Lightbulb 
            size={34}
            className="absolute p-1 right-2 bottom-2 rounded-full bg-bgPrimaryColor text-gray-200"
            />
          </div>

          <div className="p-2 h-48 rounded-xl relative cursor-pointer bg-bgSecondaryColor text-gray-200">
            <p>Come up with a complex word riddle, including hints</p>
            <SquarePen 
            size={36}
            className="absolute p-1 right-2 bottom-2 rounded-full bg-bgPrimaryColor text-gray-200"
            />
          </div>

          <div className="p-2 h-48 rounded-xl relative cursor-pointer bg-bgSecondaryColor text-gray-200">
            <p>Look up a Linux shell command for a specific task</p>
            <Code
            size={36}
            className="absolute p-1 right-2 bottom-2 rounded-full bg-bgPrimaryColor text-gray-200"
            />
          </div>
         </div>
         </>
        ) : (
         <div className="result">
          <div className="my-10 flex items-center gap-5">
            <CircleUserRound size={40} className="text-softTextColor" />
            <p> {recentPrompts} </p>
          </div>
         </div>
        ) }

         <div className="absolute w-full bottom-0 max-w-[900px] px-5 m-auto">
          <form action={submit} >
            <div className="flex items-center justify-between gap-5 py-2 px-5 rounded-full bg-bgSecondaryColor">
              <input 
              onChange={(e) => setInput(e.target.value)}
              value={input}
               type="text" 
               placeholder="Enter a prompt here"
               className="flex-1 border-none bg-transparent border-none outline-none p-2 text-md text-gray-200"
              />

               <div className="flex cursor-pointer text-gray-200">
                <ImagePlus type="submit" size={24} />
              </div>

              <div className="flex cursor-pointer text-gray-200">
                <Mic type="submit" size={24} />
              </div>
            </div>
          </form>
          <p className="text-gray-400 text-sm text-center p-3">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. <span className="underline "> Your privacy and Gemini Apps </span>
          </p>

         </div>
        </div>
       </div>
    )
}

export default BodyContent;