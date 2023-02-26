import React from "react";
import memesres from "../memes.js"
import "../index.css"

export default function MainBody() {

    const [Meme, setMeme] = React.useState(
        {
            memeNumber: Math.floor(Math.random() * memesres.data.memes.length),
            topText: "",
            bottomText: ""
        }
    )

    function handleChange(event) {
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                [event.target.name]: event.target.value
            }
        })
    }


    function newMeme() {
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                memeNumber: Math.floor(Math.random() * memesres.data.memes.length)
            }
        })
    }

    function memeDowload(url) {
        // To create downloadable link
        const start = url.slice(0, 9)
        const middle = "-download"
        const end = url.slice(9,)

        return start + middle + end
    }

    function textReset() {
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                topText: "",
                bottomText: ""
            }
        })
    }

    return (
        <div className="p-5 md:p-10 bg-white rounded-b-3xl">
            <div className="flex flex-col gap-1 md:gap-3">
                <input type="text" className="w-full p-2 font-[Karla] rounded-md border-gray-300 border-2"
                    onChange={handleChange} value={Meme.topText} name="topText" />

                <input type="text" className="w-full p-2 font-[Karla] rounded-md border-gray-300 border-2"
                    onChange={handleChange} value={Meme.bottomText} name="bottomText" />
            </div>

            <button
                className="w-full bg-gradient-to-r from-[#672280] to-[#A626D3] hover:from-[#ab3dd3] hover:to-[#ab3dd3] py-2 mt-5 font-[Karla] text-white text-md md:text-xl font-medium rounded-lg" onClick={newMeme}>
                Generate New Meme <i className="fa-solid fa-wand-magic-sparkles"></i>
            </button>

            <div className="relative mt-6 md:mt-12">
                <img src={memesres.data.memes[Meme.memeNumber].url} alt="meme" />
                <p className="topText memeText">
                    {Meme.topText}
                </p>

                <p className="bottomText memeText">
                    {Meme.bottomText}
                </p>
            </div>

            <div className="flex justify-end text-3xl md:text-4xl mt-2 md:mt-4 gap-1 md:gap-3">
                <a>
                    <i className="fa-solid fa-square-xmark text-[#672280] hover:text-[#A626D3] h-fit" onClick={textReset}></i>
                </a>

                <a href={memeDowload(memesres.data.memes[Meme.memeNumber].url)}>
                    <i className="fa-solid fa-square-caret-down text-[#672280] hover:text-[#A626D3] h-fit"></i>
                </a>

                <a href="https://github.com/thenithinbalaji" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-github text-[#672280] hover:text-[#A626D3] h-fit"></i>
                </a>
            </div>
        </div>
    )
}