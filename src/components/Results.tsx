import React from "react";
import {DataText} from "./DataText";

export function Results({data}) {

    return (
        <section className="flex flex-col items-center relative">
            <DataText data={data}/>
        </section>
    )
}