"use client"
import React ,{useState} from 'react'
import { Menu , Plus , CircleHelp , History ,Settings} from "lucide-react"

const Sidebar = () => {
    const[isOpen , setIsOpen] = useState(true);
    return(
        <div className='min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 pl-2 pr-8'>
            <div >
                <Menu size={25} onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer " />

                <div className='cursor-pointer inline-flex items-center gap-2.5 mt-8 p-2 rounded-full text-md text-gray-400 bg-bgPrimaryColor'>
                <Plus size={20} className='text-softTextColor cursor-pointer ' />
                {isOpen ? <p className='px-4 text-sm'>New Chat</p> : null}
            </div>
            {isOpen ? (
             <div className="flex flex-col">
              <p className='mb-5 mt-8 text-white'>Recent</p>
             </div>
            ) : null}
            </div>
           <div className="flex flex-col gap-5">

            <div className="flex items-center gap-2  text-gray-200 cursor-pointer">
                <CircleHelp size={20} className='text-gray-200' />
                {isOpen ? <p>Help</p> : null }
            </div>

            <div className="flex items-center gap-2  text-gray-200 cursor-pointer">
                <History size={20} className='text-gray-200' />
                {isOpen ? <p>Activity</p> : null }
            </div>

            <div className="flex items-center gap-2  text-gray-200 cursor-pointer">
                <Settings size={20} className='text-gray-200' />
                {isOpen ? <p>Settings</p> : null }
            </div>
           </div>
        </div>
    )
}

export default Sidebar;