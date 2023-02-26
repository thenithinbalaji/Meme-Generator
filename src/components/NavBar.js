import React from "react";
import trollface from "../assets/trollface.svg"

export default function NavBar() {
    return (
        <div className="flex justify-left bg-gradient-to-r from-[#672280] to-[#A626D3] py-4 px-10 rounded-t-3xl">
            <div className="flex gap-3">
                <img src={trollface} alt="troll face logo" className="h-9 md:h-12" />
                <p className="my-auto font-[Karla] text-md md:text-2xl text-white font-bold">Meme Generator</p>
            </div>
        </div>
    )
}