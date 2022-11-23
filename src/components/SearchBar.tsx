import React from "react";

export function SearchBar({setInput, ipCheck, input}) {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        ipCheck()
    }

    return (
        <div className="bg-pattern p-10 pb-32 bg-no-repeat bg-cover shadow-2xl">
            <h1 className="mb-4 text-center text-2xl text-white font-bold">IP Address Tracker</h1>
        <form onSubmit={handleSubmit} className="flex justify-center">
            <input className="p-3 rounded-l-xl w-96 max-w-2/3 h-12"
                type="text" placeholder="Search for any IP address or domain" value={input} onChange={handleInput}/>
            <button className="bg-dark rounded-r-xl h-12 w-10 shrink-0 bg-arrow bg-no-repeat bg-center"
                type="submit"></button>
        </form>
        </div>
    )
}