import React from "react";

export function DataText({data}){
    return (
        !data ? null :
        <section className="absolute bg-white p-10 -top-14 w-[90%] max-w-[1000px] rounded
                        flex flex-col md:flex-row justify-around gap-6 flex-wrap md:divide-x md:divide-light
                        text-center md:text-left">
            <div>
                <h2 className="text-light font-bold text-sm">IP ADDRESS</h2>
                <p className="text-dark font-bold text-xl">{data.ip}</p>
            </div>
            <div className="md:pl-6">
                <h2 className="text-light font-bold text-sm">Location</h2>
                <p className="text-dark font-bold text-xl">{data.location.city}</p>
            </div>
            <div className="md:pl-6">
                <h2 className="text-light font-bold text-sm">Timezone</h2>
                <p className="text-dark font-bold text-xl">{data.location.timezone}</p>
            </div>
            <div className="md:pl-6">
                <h2 className="text-light font-bold text-sm">ISP</h2>
                <p className="text-dark font-bold text-xl">{data.isp}</p>
            </div>
        </section>
    )
}