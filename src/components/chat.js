"use client"

import { useState } from "react"
import ChatIcon from "../../public/img/chat.svg"

const chatIconColor = "rgba(249, 115, 22, .8)"

export default function Chat(){

    const [open, setOpen] = useState(false)

    const handleChatButton = () => {
        setOpen(!open)
    }

    return (
        <div className="z-50" >
            <div className={`${open ? "" : "hidden"} p-1 flex flex-col z-50 border rounded-xl border-black h-[85vh] w-[90vw] fixed bottom-16 right-6 bg-gray-100/50`}>
                <div className="flex-grow bg-red-100/80 border rounded-xl border-black mb-1">messages box</div>
                <div className="h-14 w-full bg-green-200/80 border rounded-xl border-black">chatinput box</div>
            </div>
            <button 
                className="z-50 fixed bottom-1 right-5"
                onClick={() => handleChatButton()}
            >
                <ChatIcon className="border border-black rounded-xl bg-gray-100/50 hover:bg-gray-100/80 p-1 px-2 transform scale-x-[-1] w-16 h-auto" fill={chatIconColor} />
            </button>
        </div>
    )
}