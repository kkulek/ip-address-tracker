import React from "react";

export function DataText(){
    return (
        <section className="absolute bg-white p-10 -top-14 w-[90%] max-w-[1000px] rounded
                        flex flex-col md:flex-row justify-around gap-6 flex-wrap md:divide-x md:divide-light
                        text-center md:text-left">
            <div>
                <h2 className="text-light font-bold text-sm">IP ADDRESS</h2>
                <p className="text-dark font-bold text-xl">192.212.174.101</p>
            </div>
            <div className="md:pl-6">
                <h2 className="text-light font-bold text-sm">Location</h2>
                <p className="text-dark font-bold text-xl">Brooklyn, NY 10001</p>
            </div>
            <div className="md:pl-6">
                <h2 className="text-light font-bold text-sm">Timezone</h2>
                <p className="text-dark font-bold text-xl">UTC -05:00</p>
            </div>
            <div className="md:pl-6">
                <h2 className="text-light font-bold text-sm">ISP</h2>
                <p className="text-dark font-bold text-xl">SpaceX Starlink</p>
            </div>
        </section>
    )
}