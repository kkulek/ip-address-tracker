import {MapContainer, Marker, TileLayer} from "react-leaflet";
import { Icon } from "leaflet";
import icon from "../images/icon-location.svg"

const customIcon = new Icon({
    iconUrl: icon,
})

export function DataMap({coordinates}) {

    return (
            <MapContainer className="w-screen h-screen max-h-[650px]" center={coordinates} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coordinates} icon={customIcon}>
                </Marker>
            </MapContainer>
    )
}