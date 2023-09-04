"use client"

import { useState } from "react"
import ChatIcon from "../../public/img/chat.svg"

const tailwindColors = {
    "text-red-50": "rgba(254, 226, 226, 1)",
    "text-red-50/20": "rgba(254, 226, 226, 0.2)",
    "text-gray-100": "rgba(243, 244, 246, 1)",
    "text-gray-100/50": "rgba(243, 244, 246, 0.5)",
    "text-gray-200": "rgba(229, 231, 235, 1)",
    "text-gray-200/50": "rgba(229, 231, 235, 0.5)",
    "text-white": "rgba(255, 255, 255, 1)",
    "custom": "rgba(249, 115, 22, .8)"
  };

const chatIconColor = "rgba(249, 115, 22, .9)"

export default function Chat(){

    const [open, setOpen] = useState(false)

    const handleChatButton = () => {
        setOpen(!open)
    }

    return (
        <div className="z-50" >
            <div className={`${open ? "" : "hidden"} z-50 border rounded-xl border-black aspect-square h-[50px] fixed bottom-10 right-6 border-x-teal-200/40`}>
                chatbox
            </div>
            <button 
                className="z-50 fixed bottom-2 right-5"
                onClick={() => handleChatButton()}
            >
                <ChatIcon className="border border-black rounded-xl bg-gray-100/50 text-orange-500 p-1 px-2 transform scale-x-[-1] w-16 h-auto opacity-75 text-red-50" fill={chatIconColor} />
            </button>
        </div>
    )
}