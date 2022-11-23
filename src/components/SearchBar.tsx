import React, {useState} from "react";

export function SearchBar() {
    const [input, setInput] = useState("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className="bg-amber-100 p-10 pr-20">
        <form onSubmit={handleSubmit} className="flex">
            <input className="p-3 rounded-l-xl w-96 max-w-2/3 h-12"
                type="text" placeholder="Search for any IP address or domain" value={input} onChange={handleInput}/>
            <button className="bg-dark rounded-r-xl h-12 w-10 shrink-0 bg-arrow bg-no-repeat bg-center"
                type="submit"></button>
        </form>
        </div>
    )
}