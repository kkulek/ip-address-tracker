import React from "react";
import {DataText} from "./DataText";
import {DataMap} from "./DataMap";

export function Results({data, coordinates}) {

    return (
        !coordinates ? null :
        <section className="flex flex-col items-center relative">
            <DataText data={data}/>
            <DataMap coordinates={coordinates}/>
        </section>
    )
}